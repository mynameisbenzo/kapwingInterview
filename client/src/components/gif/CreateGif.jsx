import React from "react";
import gifStyles from "./GifPreview.module.scss";
import styles from "../grayscale/Create.module.scss";

function CreateGifButton(props) {
  const [gifResult, setGifResult] = React.useState({
    gif: undefined,
    loading: false,
  });

  const createGif = () => {
    const body = {
      urls: props.urls,
    };

    console.log(props.urls);
    console.log(body);

    setGifResult({
      loading: true,
      gifResult: undefined,
    });

    fetch("/api/gif", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          setGifResult({
            gif: result.gifResult,
            loading: false,
          });
        },
        (error) => {
          console.log("An error occurred:", error);
          setGifResult({
            loading: false,
            gifResult: undefined,
          });
        }
      );
  };

  const renderFinalImage = () => {
    if (!gifResult.gif) return null;
    else
      return (
        <>
          <div className={styles.header}>GIF result:</div>
          <img
            src={gifResult.gif}
            alt="GIF Final"
            className={gifStyles.gifFrame}
          />
        </>
      );
  };

  return (
    <div className={styles.container}>
      {gifResult.loading ? (
        "Loading ..."
      ) : (
        <input type="button" value="Make GIF" onClick={createGif} />
      )}
      {renderFinalImage()}
    </div>
  );
}

export default CreateGifButton;

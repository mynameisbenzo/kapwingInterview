import React from "react";
import styles from "../grayscale/Preview.module.scss";
import gifStyles from "./GifPreview.module.scss";

function GifPreview(props) {
  const frame = React.useRef(0);
  const interval = React.useRef(null);
  let [prevUrls, setPrevUrls] = React.useState(null);
  let [gifFrames, setGifFrames] = React.useState([]);

  if (props.urls !== prevUrls) {
    setGifFrames(
      props.urls.map((item) => {
        const container = {};
        container["time"] = 1000;
        container["frame"] = item;
        return container;
      })
    );
    setPrevUrls(props.urls);
  }

  const changePicture = () => {
    if (gifFrames.length < 1) return;
    document.getElementById("gifPreview").src = gifFrames[frame.current].frame;
    frame.current++;
    if (frame.current >= gifFrames.length) {
      frame.current = 0;
    }
    console.log(frame.current);
  };

  if (gifFrames.length > 0) {
    clearInterval(interval.current);
    interval.current = setInterval(
      changePicture,
      gifFrames[frame.current].time
    );
  }

  React.useEffect(() => {
    return () => {
      clearInterval(interval.current);
      interval.current = null;
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>Preview of GIF:</div>
      <div className={gifStyles.gifPreview}>
        <img id="gifPreview" className={gifStyles.gifFrame} />
      </div>
    </div>
  );
}

export default GifPreview;

import React, { Component } from "react";
import Upload from "components/upload/Upload.jsx";
import styles from "./GifMaker.module.scss";
import GifPreview from "./GifPreview.jsx";

function GifMaker(props) {
  let [urls, setUrls] = React.useState([]);
  const handleFinish = (url) => {
    setUrls((prevUrls) => [...prevUrls, url]);
  };

  return (
    <div className={styles.container}>
      <h2>Create a GIF</h2>
      <div>
        This tool allows a user to upload images, see a preview of their GIF,
        and convert those images into a GIF montage!
      </div>
      <Upload handleFinish={(url) => handleFinish(url)} />

      {/* GIF maker implementation should start here */}
      {/* {urls.length > 0 ? ( */}
      <>
        <GifPreview urls={urls} />
      </>
      {/* ) : null} */}
    </div>
  );
}

export default GifMaker;

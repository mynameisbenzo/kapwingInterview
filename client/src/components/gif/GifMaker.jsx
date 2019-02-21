import React, { Component } from "react";
import Upload from "components/upload/Upload.jsx";
import styles from "./GifMaker.module.scss";

class GifMaker extends Component {
  handleFinish = url => {
    console.log("upload complete!", url);
  };

  render() {
    return (
      <div className={styles.container}>
        <h2>Create a GIF</h2>
        <div>
          This tool allows a user to upload images, see a preview of their GIF,
          and convert those images into a GIF montage!
        </div>
        <Upload handleFinish={this.handleFinish} />

        {/* GIF maker implementation should start here */}
      </div>
    );
  }
}

export default GifMaker;

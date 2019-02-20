import React, { Component } from "react";
import Upload from "components/upload/Upload.jsx";
import styles from "./Grayscale.module.scss";

class Grayscale extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>Grayscale an image</h2>
        <div>
          This tool allows a user to upload an image, see a preview of it in
          grayscale, click create and receive their image with grayscale
          applied. To get started, upload a file:
        </div>
        <Upload />
      </div>
    );
  }
}

export default Grayscale;

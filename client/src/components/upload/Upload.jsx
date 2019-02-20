import React, { Component } from "react";
import ReactS3Uploader from "react-s3-uploader";
import styles from "./Upload.module.scss";

class Upload extends Component {
  onSignedUrl = e => {
    console.log("on signed url", e);
  };

  onUploadError = e => {
    console.log("on upload error", e);
  };

  onUploadFinish = e => {
    console.log("on upload finish", e);
  };

  render() {
    return (
      <div className={styles.container}>
        <ReactS3Uploader
          signingUrl="/upload/sign"
          signingUrlMethod="GET"
          accept="image/*"
          preprocess={this.onUploadStart}
          onSignedUrl={this.onSignedUrl}
          onProgress={this.onUploadProgress}
          onError={this.onUploadError}
          onFinish={this.onUploadFinish}
          contentDisposition="auto"
          scrubFilename={filename => filename.replace(/[^\w\d_\-.]+/gi, "")}
          inputRef={cmp => (this.uploadInput = cmp)}
          autoUpload={true}
        />
      </div>
    );
  }
}

export default Upload;

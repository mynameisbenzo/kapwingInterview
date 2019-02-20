import React, { Component } from "react";
import styles from "./Preview.module.scss";

class Preview extends Component {
  renderPreview() {
    // const { url } = this.props;
    const url =
      "https://kapwing-uploads.s3.amazonaws.com/916djx7QfAL._SL1500_3.jpg";

    return (
      <>
        <div className={styles.header}>Preview of final image:</div>
        <img src={url} alt="Grayscale Preview" className={styles.image} />
      </>
    );
  }
  render() {
    // const { url } = this.props;
    const url =
      "https://kapwing-uploads.s3.amazonaws.com/916djx7QfAL._SL1500_3.jpg";

    return (
      <div className={styles.container}>
        {url
          ? this.renderPreview()
          : "Upload an image to see a grayscale preview!"}
      </div>
    );
  }
}

export default Preview;

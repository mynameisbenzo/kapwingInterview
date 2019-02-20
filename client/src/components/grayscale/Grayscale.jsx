import React, { Component } from "react";
import Upload from "components/upload/Upload.jsx";
import Preview from "./Preview.jsx";
import Create from "./Create.jsx";
import styles from "./Grayscale.module.scss";

class Grayscale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: undefined
    };
  }

  handleFinish = url => {
    console.log("upload complete!", url);
    this.setState({
      url
    });
  };

  render() {
    const { url } = this.state;

    return (
      <div className={styles.container}>
        <h2>Grayscale an image</h2>
        <div>
          This tool allows a user to upload an image, see a preview of it in
          grayscale, click create and receive their image with grayscale
          applied. To get started, upload a file:
        </div>
        <Upload handleFinish={this.handleFinish} />
        {url ? (
          <>
            <Preview url={url} />
            <Create url={url} />
          </>
        ) : null}
      </div>
    );
  }
}

export default Grayscale;

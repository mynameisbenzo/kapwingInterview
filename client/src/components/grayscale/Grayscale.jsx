import React, { Component } from "react";
import Upload from "components/upload/Upload.jsx";
import Preview from "./Preview.jsx";
import CreateButton from "./CreateButton.jsx";
import styles from "./Grayscale.module.scss";

class Grayscale extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: undefined
    };
  }

  handleFinish = url => {
    console.log("upload complete!", url);
    this.setState({
      image: url
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <h2>Grayscale an image</h2>
        <div>
          This tool allows a user to upload an image, see a preview of it in
          grayscale, click create and receive their image with grayscale
          applied. To get started, upload a file:
        </div>
        <Upload handleFinish={this.handleFinish} />
        <Preview url={this.state.image} />
        <CreateButton url={this.state.image} />
      </div>
    );
  }
}

export default Grayscale;

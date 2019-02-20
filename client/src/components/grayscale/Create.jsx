import React, { Component } from "react";
import styles from "./Create.module.scss";

class CreateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grayscaledImage: undefined,
      loading: false
    };
  }

  createGrayscale = () => {
    const { url } = this.props;
    const body = {
      url
    };

    this.setState({
      loading: true,
      grayscaledImage: undefined
    });

    fetch("/api/grayscale", {
      headers: {
        "Content-Type": "application/json"
      },
      method: "post",
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            grayscaledImage: result.grayscaledImage,
            loading: false
          });
        },
        error => {
          console.log("An error occurred:", error);
          this.setState({
            loading: false
          });
        }
      );
  };

  renderFinalImage() {
    const { grayscaledImage } = this.state;

    if (!grayscaledImage) return null;
    else
      return (
        <>
          <div className={styles.header}>Final image:</div>
          <img
            src={grayscaledImage}
            alt="Grayscale Final"
            className={styles.image}
          />
        </>
      );
  }

  render() {
    const { loading } = this.state;
    return (
      <div className={styles.container}>
        {loading ? (
          "Loading ..."
        ) : (
          <input
            type="button"
            value="Make image grayscale"
            onClick={this.createGrayscale}
          />
        )}
        {this.renderFinalImage()}
      </div>
    );
  }
}

export default CreateButton;

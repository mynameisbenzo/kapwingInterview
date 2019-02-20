import React, { Component } from "react";
import styles from "./CreateButton.module.scss";

class CreateButton extends Component {
  createGrayscale = () => {
    const url =
      "https://kapwing-uploads.s3.amazonaws.com/916djx7QfAL._SL1500_3.jpg";

    const body = {
      url
    };

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
          console.log(result);
        },
        error => {
          console.log("error occurred,", error);
        }
      );
  };

  render() {
    // const { url } = this.props;
    const url =
      "https://kapwing-uploads.s3.amazonaws.com/916djx7QfAL._SL1500_3.jpg";

    return (
      <div className={styles.container}>
        {url ? (
          <input
            type="button"
            value="Make image grayscale"
            onClick={this.createGrayscale}
          />
        ) : null}
      </div>
    );
  }
}

export default CreateButton;

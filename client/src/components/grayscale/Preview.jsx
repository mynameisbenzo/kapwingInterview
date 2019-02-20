import React, { Component } from "react";
import styles from "./Preview.module.scss";

class Preview extends Component {
  render() {
    const { url } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.header}>Preview of final image:</div>
        <img src={url} alt="Grayscale Preview" className={styles.image} />
      </div>
    );
  }
}

export default Preview;

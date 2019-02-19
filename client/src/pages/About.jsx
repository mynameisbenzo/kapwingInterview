import React, { Component } from "react";
import styles from "./common.module.scss";

class About extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>About page</h2>
        <div>This is the about page for the Kapwing interview project.</div>
      </div>
    );
  }
}

export default About;

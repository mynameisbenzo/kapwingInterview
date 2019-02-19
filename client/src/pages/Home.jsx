import React, { Component } from "react";
import styles from "./common.module.scss";

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>Home page</h2>
        <div>This is the home page for the Kapwing interview project.</div>
      </div>
    );
  }
}

export default Home;

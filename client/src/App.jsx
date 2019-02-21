import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "pages/Home.jsx";
import GifMaker from "components/gif/GifMaker.jsx";
import Grayscale from "components/grayscale/Grayscale.jsx";
import styles from "./App.module.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className={styles.menu}>
            <div className={styles.menuItem}>
              <Link to="/">Home</Link>
            </div>
            <div className={styles.menuItem}>
              <Link to="/grayscale">Grayscale</Link>
            </div>
            <div className={styles.menuItem}>
              <Link to="/gif-maker">GIF Maker</Link>
            </div>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/gif-maker" component={GifMaker} />
          <Route path="/grayscale" component={Grayscale} />
        </>
      </Router>
    );
  }
}

export default App;

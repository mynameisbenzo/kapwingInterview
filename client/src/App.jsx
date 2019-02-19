import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "pages/Home.jsx";
import About from "pages/About.jsx";
import Grayscale from "components/grayscale/Grayscale.jsx";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/grayscale">Grayscale</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/grayscale" component={Grayscale} />
        </div>
      </Router>
    );
  }
}

export default App;

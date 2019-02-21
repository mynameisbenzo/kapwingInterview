import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./common.module.scss";

class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h2>Kapwing Interview Project</h2>
        <p>Thank you for your interest in Kapwing!</p>
        <p>This repo is a simple website that contains two features:</p>
        <ul>
          <li>
            <Link to="/grayscale">
              <strong>Grayscale Image</strong>
            </Link>
            : upload an image and get a grayscaled version of the image.
          </li>
          <li>
            <Link to="/gif-maker">
              <strong>GIF Maker</strong>
            </Link>
            : upload an image (or multiple images) and get back a GIF slideshow
            of the images.
          </li>
        </ul>
        <p>
          The task at hand is to complete the GIF Maker feature so that it works
          properly. More specifically, the feature should:
        </p>
        <ol>
          <li>Allow the user to add multiple images</li>
          <li>
            Show a preview of the images playing one after another in a
            slideshow style
          </li>
          <li>Create and return a GIF that matches the preview</li>
        </ol>
        <p>
          The grayscale image feature is a working end to end implementation.
          It's provided as a reference, but feel free to implement the GIF maker
          however you would like.{" "}
        </p>
        <p>Some tips for getting started:</p>
        <ul>
          <li>
            Think through the overall product before jumping into implementing /
            coding the feature.
          </li>
          <li>
            Try to get a very basic MVP working before you move on to additional
            features or anything fancy.
          </li>
          <li>
            Don't be afraid to ask us questions! We are here to help and our
            hope is that this is collaborative project that is reflective of
            what it would be like to work together.
          </li>
        </ul>
        <p>
          For the full guide, please see{" "}
          <a
            href="https://docs.google.com/document/d/1f7MpfMQevpiHisR4LlHJLUvprPdp4tepQbx29zW59E0/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            this Google document
          </a>
          .
        </p>
        <p>Thanks and good luck!</p>
      </div>
    );
  }
}

export default Home;

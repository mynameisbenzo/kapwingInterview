import React from "react";
import styles from "../grayscale/Preview.module.scss";
import gifStyles from "./GifPreview.module.scss";

function GifPreview(props) {
  const frame = React.useRef(0);
  const interval = React.useRef(null);
  const [gifFrameTime, setGifFrameTime] = React.useState(500);

  const changePicture = () => {
    if (props.urls.length < 1) return;
    document.getElementById("gifPreview").src = props.urls[frame.current];
    frame.current++;
    if (frame.current >= props.urls.length) {
      frame.current = 0;
    }
  };

  if (props.urls.length > 0) {
    clearInterval(interval.current);
    interval.current = setInterval(changePicture, gifFrameTime);
  }

  React.useEffect(() => {
    return () => {
      clearInterval(interval.current);
      interval.current = null;
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>Preview of GIF:</div>
      <div className={gifStyles.gifPreview}>
        <img id="gifPreview" className={gifStyles.gifFrame} />
      </div>
    </div>
  );
}

export default GifPreview;

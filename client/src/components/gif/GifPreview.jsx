import React from "react";
import styles from "../grayscale/Preview.module.scss";
import gifStyles from "./GifPreview.module.scss";

function GifPreview(props) {
  const dragging = React.useRef(null);
  const draggedOver = React.useRef(null);
  const frame = React.useRef(0);
  const interval = React.useRef(null);
  const [prevUrls, setPrevUrls] = React.useState([]);
  const [gifFrameTime, setGifFrameTime] = React.useState(500);

  const removeFrame = (e) => {
    var imgSrc = e.target.parentNode.children[0].src;
    const removeMe = prevUrls.indexOf(imgSrc);
    var temp = prevUrls.slice();
    temp.splice(removeMe, 1);
    var deletedFrame = new CustomEvent("deleted-frame", { detail: temp });
    document.dispatchEvent(deletedFrame);
    setPrevUrls(temp);
  };

  const setDragging = (e) => {
    dragging.current = Number.isNaN(parseInt(e.target.src))
      ? e.target.src
      : parseInt(e.target.src);
  };
  const setDraggedOver = (e) => {
    e.preventDefault();
    draggedOver.current = Number.isNaN(parseInt(e.target.src))
      ? e.target.src
      : parseInt(e.target.src);
  };

  const compare = (e) => {
    var index1 = prevUrls.indexOf(dragging.current);
    var index2 = prevUrls.indexOf(draggedOver.current);
    var temp = prevUrls.slice();

    if (index1 > index2) {
      temp.splice(index2, 0, dragging.current);
      temp.splice(index1 + 1, 1);
    } else {
      temp.splice(index2 + 1, 0, dragging.current);
      temp.splice(index1, 1);
    }
    setPrevUrls(temp);
  };

  const buildCarousel = () => {
    var list = document.getElementById("list");
    if (!list) return;
    list.innerText = "";

    prevUrls.forEach((url) => {
      var listNode = document.createElement("div");
      var image = document.createElement("img");
      image.src = url;
      image.classList = gifStyles.frame;
      var deleteButton = document.createElement("button");
      deleteButton.classList = gifStyles.deleteButton;
      deleteButton.innerHTML = "X";
      deleteButton.addEventListener("click", removeFrame);
      listNode.draggable = true;
      listNode.classList = gifStyles.frameItem;
      listNode.addEventListener("drag", setDragging);
      listNode.addEventListener("dragover", setDraggedOver);
      listNode.addEventListener("drop", compare);
      listNode.appendChild(image);
      listNode.appendChild(deleteButton);
      list.appendChild(listNode);
    });
  };

  if (props.urls.length > prevUrls.length) {
    setPrevUrls(props.urls);
    buildCarousel();
  } else {
    buildCarousel();
  }

  const changePicture = () => {
    if (prevUrls.length < 1) return;
    document.getElementById("gifPreview").src = prevUrls[frame.current];
    frame.current++;
    if (frame.current >= prevUrls.length) {
      frame.current = 0;
    }
  };

  const animateGif = () => {
    if (prevUrls.length > 0) {
      clearInterval(interval.current);
      interval.current = setInterval(changePicture, props.gifFrameTime);
    }
  };

  const increaseInterval = () => {
    if (props.gifFrameTime <= 100) return;
    var deletedFrame = new CustomEvent("update-frametime", {
      detail: props.gifFrameTime - 100,
    });
    document.dispatchEvent(deletedFrame);
  };

  const decreaseInterval = () => {
    var deletedFrame = new CustomEvent("update-frametime", {
      detail: props.gifFrameTime + 100,
    });
    document.dispatchEvent(deletedFrame);
  };
  React.useEffect(() => {
    return () => {
      clearInterval(interval.current);
      interval.current = null;
    };
  }, []);

  animateGif();

  return (
    <div className={styles.container}>
      <div className={styles.header}>Preview of GIF:</div>
      <div className={gifStyles.gifPreview}>
        <img id="gifPreview" className={gifStyles.gifFrame} />
      </div>
      <div>
        <h2>Change frame speed:</h2>
        <p>{props.gifFrameTime / 1000} seconds per frame</p>
        <button onClick={decreaseInterval}>&lt;</button>
        <button onClick={increaseInterval}>&gt;</button>
      </div>
      <h2>Reorder/Remove frames:</h2>
      <div id="list" className={gifStyles.frameHolder}></div>
    </div>
  );
}

export default GifPreview;

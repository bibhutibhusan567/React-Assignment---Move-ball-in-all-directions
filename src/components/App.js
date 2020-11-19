import React, { Component, useEffect, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px",
  });
  const reset = () => {
    setRenderBall(false);
    setX(0);
    setY(0);

    updateXY(0, 0);
  };

  const start = () => {
    setRenderBall(true);
  };

  const renderChoice = () => {
    return (renderBall ? (
      <div className="ball" style={{
        position: "absolute",
        left: ballPosition.left,
        top: ballPosition.top
      }}></div>
    ) : (
        <button onClick={start} className="start">
          Start
        </button>
      ));

  };

  const updateXY = (newX, newY) => {
    setX(newX);
    setY(newY);

    setBallPosition({
      left: newX + "px",
      top: newY + "px"
    });
  };

  useEffect(() => {
    const keyListner = (event) => {
      console.log(renderBall, x, y);
      if (renderBall) {
        if (event.keyCode === 37) {
          console.log("left");
          updateXY(x - 5, y);
        }
        if (event.keyCode === 38) {
          console.log("up");
          updateXY(x, y - 5);
        }
        if (event.keyCode === 39) {
          console.log("right");
          updateXY(x + 5, y);
        }
        if (event.keyCode === 40) {
          console.log("down");
          updateXY(x, y + 5);
        }
      }
    };

    document.addEventListener("keydown", keyListner);

    return () => document.removeEventListener("keydown", keyListner);
  });

  return (
    <div className="playground">

      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;

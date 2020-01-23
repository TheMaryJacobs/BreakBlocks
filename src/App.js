import React, { useState } from "react";
import "./styles.css";
import Paddle from "./components/Paddle";

export default function App() {
  const [paddleX, setPaddleX] = useState(0);
  function handleMouse(e) {
    console.log(e);
    setPaddleX(e.x);
  }
  return (
    <div className="container" onMouseMove={handleMouse}>
      <Paddle paddle={paddleX} />
    </div>
  );
}

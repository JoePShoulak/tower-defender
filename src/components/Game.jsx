import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

const sketch = (p5) => {
  p5.setup = () => p5.createCanvas(600, 400);

  p5.draw = () => {
    p5.background(20);
    p5.circle(p5.width / 2, p5.height / 2, 10);
  };
};

const Game = () => <ReactP5Wrapper sketch={sketch} />;

export default Game;

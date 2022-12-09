import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import Bloon from "./gameLibrary/Bloon";

import { display } from "./gameLibrary/helper";

const sketch = (p5) => {
  let path = [];
  let b;

  p5.setup = () => {
    p5.createCanvas(600, 400);
    p5.background("green");

    path = [
      { x: p5.width / 3, y: p5.height },
      { x: p5.width / 3, y: p5.height / 3 },
      { x: p5.width, y: p5.height / 3 },
    ];

    b = new Bloon(p5.width / 2, p5.height / 2);
  };

  p5.draw = () => {
    display(p5).path(path);

    b.update((b) => {
      p5.circle(b.pos.x, b.pos.y, 10);
    });
  };
};

const Game = () => <ReactP5Wrapper sketch={sketch} />;

export default Game;

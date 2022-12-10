import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

import Bloon from "./gameLibrary/Bloon";
import Path from "./gameLibrary/Path";

const sketch = (p5) => {
  let path;
  let bloons = [];
  const bloonCount = 25;

  p5.setup = () => {
    p5.createCanvas(600, 400);

    path = new Path(p5, 10, 0, p5.height / 2, p5.width, p5.height / 2);

    bloons = Array(bloonCount)
      .fill()
      .map(() => {
        const b = new Bloon(p5, path);
        b.pos.y += p5.random(-50, 50);
        b.pos.x += p5.random(50, 250);
        return b;
      });

    Path.verbose = true;
  };

  p5.draw = () => {
    p5.background("green");

    path.draw();

    bloons.forEach((b) => b.update());
  };
};

const Game = () => <ReactP5Wrapper sketch={sketch} />;

export default Game;

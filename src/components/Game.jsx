import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

import Bloon from "./gameLibrary/Bloon";
import { Segment, Path } from "./gameLibrary/Path";

const sketch = (p5) => {
  let path;
  let bloons = [];
  const bloonCount = 1;

  p5.setup = () => {
    p5.createCanvas(600, 400);

    const p1 = p5.createVector(0, p5.height / 2);
    const p2 = p5.createVector(p5.width / 2, p5.height / 2.5);
    const p3 = p5.createVector(p5.width, p5.height);

    path = new Path(p5, 10, p1, p2, p3);

    bloons = Array(bloonCount)
      .fill()
      .map(() => {
        const b = new Bloon(p5, path);
        b.pos.y += p5.random(-200, 200);
        b.pos.x += p5.random(50, 250);
        return b;
      });

    Segment.showRadius = true;
    Bloon.showForces = true;
  };

  p5.draw = () => {
    p5.background("green");

    path.draw();

    bloons.forEach((b) => b.update());
  };
};

const Game = () => <ReactP5Wrapper sketch={sketch} />;

export default Game;

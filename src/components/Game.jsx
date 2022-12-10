import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";

import Enemy from "./gameLibrary/Enemy";
import Path from "./gameLibrary/Path";
import Tower from "./gameLibrary/Tower";
import World from "./gameLibrary/World";

const sketch = (p5) => {
  let world;
  const bloonCount = 1;

  p5.setup = () => {
    p5.createCanvas(600, 400);

    const p1 = p5.createVector(0, p5.height / 2);
    const p2 = p5.createVector(p5.width / 2, p5.height / 2.5);
    const p3 = p5.createVector(p5.width, p5.height);

    world = new World(p5);
    world.path = new Path(world, 10, p1, p2, p3);

    world.enemies = Array(bloonCount)
      .fill()
      .map(() => {
        const b = new Enemy(world);
        b.pos.y += p5.random(-200, 200);
        b.pos.x += p5.random(50, 250);
        return b;
      });

    world.towers = [
      new Tower(world, p5.createVector(p5.width / 2, p5.height / 2)),
    ];

    Path.showRadius = true;
    Enemy.showForces = true;
  };

  p5.draw = () => {
    p5.background("green");

    world.update();
  };
};

const Game = () => <ReactP5Wrapper sketch={sketch} />;

export default Game;

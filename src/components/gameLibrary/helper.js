const draw = (p5) => ({
  arrow: (size, pos, angle) => {
    p5.push();
    p5.translate(pos);
    p5.rotate(angle + p5.HALF_PI);
    p5.beginShape();
    p5.vertex(0, -size);
    p5.vertex(size / 2, size);
    p5.vertex(0, size / 2);
    p5.vertex(-size / 2, size);
    p5.endShape();
    p5.pop();
  },

  lineArrow: (start, end, arrowSize) => {
    p5.line(start.x, start.y, end.x, end.y);
    const angle = end.copy().sub(start).heading();

    draw(p5).arrow(arrowSize, end, angle);
  },

  force: (bloon, force) => {
    const end = bloon.pos.copy().add(force.mult(50));

    p5.strokeWeight("1");
    p5.stroke("red");
    draw(p5).lineArrow(bloon.pos, end, 5);
  },
});

module.exports = { draw };

class Path {
  static verbose = false;

  constructor(p5, radius, x1, y1, x2, y2) {
    this.p5 = p5;
    this.radius = radius;
    this.start = p5.createVector(x1, y1);
    this.end = p5.createVector(x2, y2);
  }

  draw() {
    const drawPath = () =>
      this.p5.line(this.start.x, this.start.y, this.end.x, this.end.y);

    if (Path.verbose) {
      this.p5.strokeWeight(this.radius * 2);
      this.p5.stroke("gray");
      drawPath();
    }

    this.p5.strokeWeight(1);
    this.p5.stroke("black");
    drawPath();
  }
}

export default Path;

class Segment {
  static showRadius = false;

  constructor(p5, radius, p1, p2) {
    this.p5 = p5;
    this.radius = radius;
    this.start = p1;
    this.end = p2;
  }

  draw() {
    const drawPath = () =>
      this.p5.line(this.start.x, this.start.y, this.end.x, this.end.y);

    if (Segment.showRadius) {
      this.p5.strokeWeight(this.radius * 2);
      this.p5.stroke("gray");
      drawPath();
    }

    this.p5.strokeWeight(1);
    this.p5.stroke("black");
    drawPath();
  }
}

class Path {
  constructor(p5, radius, ...points) {
    this.p5 = p5;
    this.radius = radius;
    this.segments = points
      .slice(1)
      .map((p, i) => new Segment(p5, radius, points[i], p));
  }

  draw() {
    this.segments.forEach((s) => s.draw());
  }
}

module.exports = { Path, Segment };

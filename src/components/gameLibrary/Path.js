class Segment {
  constructor(world, radius, p1, p2) {
    this.world = world;
    this.p5 = world.p5;
    this.radius = radius;
    this.start = p1;
    this.end = p2;
  }

  contains(point) {
    return (
      point.x > Math.min(this.start.x, this.end.x) &&
      point.x < Math.max(this.start.x, this.end.x) &&
      point.y > Math.min(this.start.y, this.end.y) &&
      point.y < Math.max(this.start.y, this.end.y)
    );
  }

  update() {
    this.draw();
  }

  draw() {
    const drawPath = () =>
      this.p5.line(this.start.x, this.start.y, this.end.x, this.end.y);

    if (Path.showRadius) {
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
  static showRadius = false;

  constructor(world, radius, ...points) {
    this.world = world;
    this.radius = radius;
    this.segments = points
      .slice(1)
      .map((p, i) => new Segment(world, radius, points[i], p));
  }

  update() {
    this.segments.forEach((s) => s.update());
  }
}

export default Path;

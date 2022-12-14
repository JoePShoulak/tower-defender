import { draw } from "./helper";

class Enemy {
  static showForces = false;

  constructor(world) {
    this.world = world;
    this.p5 = world.p5;
    this.size = 20;
    this.path = world.path;

    this.pos = this.path.segments[0].start.copy();
    this.vel = this.p5.createVector(2, 0);
    this.acc = this.p5.createVector();

    this.predictionFactor = 50;

    this.velLimit = 2;
    this.accLimit = 0.2;
  }

  get predictedPos() {
    return this.vel.copy().mult(this.predictionFactor).add(this.pos);
  }

  get closestSegment() {
    return this.path.segments.reduce((acc, val) =>
      this.distToSegment(val) < this.distToSegment(acc) ? val : acc
    );
  }

  distToSegment(segment) {
    const projection = this.projection(segment);
    if (!segment.contains(projection)) return Infinity;

    return projection.sub(this.pos).mag();
  }

  onSegment(segment) {
    return this.distToSegment(segment) <= segment.radius;
  }

  projection(segment, pos = this.pos) {
    const v1 = pos.copy().sub(segment.start);
    const v2 = segment.end.copy().sub(segment.start).normalize();
    const projection = v2.mult(v1.dot(v2)).add(segment.start);

    return projection;
  }

  wrap() {
    if (this.pos.x > 600) this.pos.x -= 600;
  }

  applyForce(force) {
    if (Enemy.showForces) draw(this.p5).force(this, force);

    this.acc.add(force);
  }

  seek(target) {
    return target.copy().sub(this.pos).normalize();
  }

  get pathForce() {
    return this.seek(this.projection(this.closestSegment, this.predictedPos));
  }

  update() {
    if (!this.onSegment(this.closestSegment)) this.applyForce(this.pathForce);

    this.acc.limit(this.accLimit);
    this.vel.add(this.acc);
    this.vel.limit(this.velLimit);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.wrap();

    this.draw();
  }

  draw() {
    this.p5.strokeWeight(1);
    this.p5.stroke("orange");
    this.p5.fill("red");
    this.p5.circle(this.pos.x, this.pos.y, this.size);
  }
}

export default Enemy;

class Bloon {
  constructor(p5, path) {
    this.p5 = p5;
    this.path = path;
    this.size = 20;

    this.pos = path.start.copy();
    this.vel = this.p5.createVector(2, 0);
    this.acc = p5.createVector();

    this.velLimit = 2;
    this.accLimit = 0.2;
  }

  get predictedPos() {
    return this.vel.copy().mult(50).add(this.pos);
  }

  get distToPath() {
    return this.pathProjection().sub(this.pos).mag();
  }

  get onPath() {
    return this.distToPath <= this.path.radius;
  }

  pathProjection(pos = this.pos) {
    const v1 = pos.copy().sub(this.path.start);
    const v2 = this.path.end.copy().sub(this.path.start).normalize();

    return v2.mult(v1.dot(v2)).add(this.path.start);
  }

  wrap() {
    if (this.pos.x > 600) this.pos.x -= 600;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  seek(target) {
    return target.copy().sub(this.pos).normalize();
  }

  get pathForce() {
    // this.p5.noStroke();
    // this.p5.fill("blue");
    // this.p5.circle(this.predictedPos.x, this.predictedPos.y, this.size / 2);

    // this.p5.fill("red");
    // this.p5.circle(
    //   this.pathProjection(this.predictedPos).x,
    //   this.pathProjection(this.predictedPos).y,
    //   this.size / 2
    // );

    return this.seek(this.pathProjection(this.predictedPos));
  }

  update() {
    if (!this.onPath) {
      this.applyForce(this.pathForce);
    }

    this.acc.limit(this.accLimit);
    this.vel.add(this.acc);
    this.vel.limit(this.velLimit);
    this.pos.add(this.vel);
    this.acc.mult(0);

    this.wrap();

    this.draw();
  }

  draw() {
    this.p5.stroke("orange");
    this.p5.fill("red");
    this.p5.circle(this.pos.x, this.pos.y, this.size);
  }
}

export default Bloon;

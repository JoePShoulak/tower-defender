import Vector from "./Vector";

class Bloon {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.vel = Vector.zero();
    this.acc = Vector.zero();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update(cb = () => {}) {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    cb(this);
  }
}

export default Bloon;

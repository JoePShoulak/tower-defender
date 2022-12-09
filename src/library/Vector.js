class Vector {
  static zero() {
    return new Vector(0, 0);
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  get magSq() {
    return this.x ** 2 + this.y ** 2;
  }

  get mag() {
    return Math.sqrt(this.magSq);
  }

  // Test
  get heading() {
    return Math.atan2(this.y, this.x);
  }

  /* == MATH == */
  add(vec) {
    this.x += vec.x;
    this.y += vec.y;
  }

  sub(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
  }

  mult(scalar) {
    this.x *= scalar;
    this.y *= scalar;
  }

  div(scalar) {
    if (scalar === 0) return undefined;

    this.x /= scalar;
    this.y /= scalar;
  }

  /* == UTILITY == */
  copy() {
    return new Vector(this.x, this.y);
  }
}

export default Vector;

class Tower {
  static showViewRadius = true;

  constructor(world, pos) {
    this.world = world;
    this.p5 = world.p5;
    this.pos = pos;
    this.viewRadius = 100;
  }

  update() {
    this.draw();
  }

  dist(obj) {
    return this.p5.dist(this.pos.x, this.pos.y, obj.pos.x, obj.pos.y);
  }

  get closestEnemy() {
    const nearby = this.nearbyEnemies;
    if (nearby.length === 0) return null;

    return nearby.reduce((acc, val) =>
      this.dist(val) < this.dist(acc) ? val : acc
    );
  }

  get nearbyEnemies() {
    return this.world.enemies.filter((e) => this.dist(e) < this.viewRadius);
  }

  draw() {
    this.p5.noStroke();
    this.p5.fill("red");
    this.p5.circle(this.pos.x, this.pos.y, 50);

    if (this.closestEnemy) console.log("hit");

    if (Tower.showViewRadius) {
      this.p5.noFill();
      this.p5.stroke("red");
      this.p5.circle(this.pos.x, this.pos.y, 2 * this.viewRadius);
    }
  }
}

export default Tower;

class World {
  constructor(p5) {
    this.p5 = p5;

    this.path = undefined;
    this.enemies = [];
    this.towers = [];
  }

  update() {
    this.path.update();
    this.enemies.forEach((e) => e.update());
    this.towers.forEach((t) => t.update());
  }
}

export default World;

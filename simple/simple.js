class Simple {
  constructor(options) {
    const { ctx } = options || {};
    this.ctx = ctx;

    // this.fecktOrRekt = this.fecktOrRekt.bind(this);

    this.fecktOrRekt();
  }

  fecktOrRekt() {
    // create a rectangle
    this.ctx.fillStyle = "rgb(100,0,200, 0.2)";
    this.ctx.fillRect(20, 20, 200, 100);

    // and a second overlapping
    this.ctx.fillStyle = "rgb(0,0,180, 0.3)";
    this.ctx.fillRect(40, 60, 240, 40);
  }
}

export { Simple };

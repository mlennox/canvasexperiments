class Simple {
  constructor(options) {
    const { ctx } = options || {};
    this.ctx = ctx;

    // this.fecktOrRekt = this.fecktOrRekt.bind(this);

    this.fecktOrRekt();
  }

  fecktOrRekt() {
    // create a rectangle
    this.ctx.fillStyle = "rgb(255,0,100, 0.2)";
    this.ctx.fillRect(20, 20, 200, 100);

    // and an overlapping stroke
    this.ctx.strokeStyle = "rgb(0,0,180, 0.3)";
    this.ctx.lineWidth = 30;
    this.ctx.strokeRect(50, 60, 240, 120);

    // and we'll take a chunk out of them
    this.ctx.clearRect(90, 10, 60, 200);
  }
}

export { Simple };

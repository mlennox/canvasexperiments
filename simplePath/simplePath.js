class SimplePath {
  constructor(options) {
    const { ctx } = options || {};
    this.ctx = ctx;

    this.doPath();
  }

  doPath() {}
}

export { SimplePath };

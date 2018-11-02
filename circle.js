let circle = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 0,
    radius: null,
    color: null,
    ctx: null,
    showTrailing: null,
    canvasDimensions: null,
    cAngle: 0,
    init: function (ctx, radius, canvasDimensions, color, showTrailing = false){
        this.ctx = ctx
        this.radius = radius
        this.canvasDimensions = canvasDimensions;
        this.showTrailing = showTrailing
        this.color = color
    },
    _draw: function () {
        let ctx = this.ctx;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.closePath();
        // ctx.fillStyle   = `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.5)`;
        ctx.fillStyle='white';
        ctx.fill();
    },
    update: function (intervalID) {
        let ctx = this.ctx;
        let canvasDimensions = this.canvasDimensions;

        if (!this.showTrailing) ctx.clearRect(0,0, canvasDimensions.w, canvasDimensions.h);
        
        this.x = (20 + this.cAngle / 20) * Math.cos(MathUtils.degToRads(this.cAngle+=2));
        this.y = (20 + this.cAngle / 20) * Math.sin(MathUtils.degToRads(this.cAngle+=2));

        this._draw();

        if (this.cAngle > 360 * 8)    clearInterval(intervalID)
      }
};
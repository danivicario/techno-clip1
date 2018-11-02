
let squareMatrix = {
    maxWidth: 100,
    ctx: null,
    init: function (ctx, maxWidth) {
        this.ctx = ctx;
        this.maxWidth = maxWidth
    },
    draw: function () {
        let doubleWidth = this.maxWidth * 2;

        ctx.translate(500, 500)

        for (var row = 0; row < 3; row++) {
            // var row = 0
            for (var column = 0; column < 3; column++) {
                ctx.save();
                ctx.fillStyle = `rgb(${(51 * row)}, ${(255 - 51 * row)}, 255)`;
                ctx.rotate(degToRads(10));
                // ctx.scale(degToRads(10));
                
                ctx.translate(10 + column * doubleWidth, 10 + row * doubleWidth);
                ctx.fillRect(0, 0, this.maxWidth, this.maxWidth);
                ctx.restore();

                ctx.scale(0.9, 0.9)
            }
        }

    }
}
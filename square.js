let square = {
    maxWidth: 100,
    ctx: null,
    init: function (ctx, maxWidth) {
        this.ctx = ctx;
        this.maxWidth = maxWidth
    },
    draw: function () {
        let ctx = this.ctx;

        ctx.translate(window.innerWidth / 2 - (square.maxWidth / 2), window.innerHeight / 2 - (square.maxWidth / 2))
        ctx.rotate((Math.PI * 45) / 180)
        ctx.fillRect(0, 0, square.maxWidth, square.maxWidth);   // Draw a rectangle with default settings
        ctx.save();                  // Save the default state

        ctx.fillStyle = 'red';      // Make changes to the settings
        ctx.fillRect(15, 15, square.maxWidth - 30, square.maxWidth - 30); // Draw a rectangle with new settings

        ctx.save();                  // Save the current state
        ctx.fillStyle = 'yellow';      // Make changes to the settings
        // ctx.globalAlpha = 0.5;
        ctx.fillRect(30, 30, square.maxWidth - 60, square.maxWidth - 60);   // Draw a rectangle with new settings

        ctx.restore();               // Restore previous state
        ctx.fillRect(45, 45, square.maxWidth - 90, square.maxWidth - 90);   // Draw a rectangle with restored settings

        ctx.restore();               // Restore original state
        ctx.fillRect(60, 60, square.maxWidth - 120, square.maxWidth - 120);   // Dra
    }
}
/**
 * Helper utlity class for working with the HTML Canvas Element.
 *
 * @version 1.1.1
 * @author Frans Blauw
 */
export default class CanvasUtil {
    /**
     * @param canvas the canvas on which will be drawn
     * @returns the 2D rendering context of the canvas
     */
    static getCanvasContext(canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx === null)
            throw new Error('Canvas Rendering Context is null');
        return ctx;
    }
    /**
     * Fill the canvas with a colour
     *
     * @param canvas canvas that requires filling
     * @param colour the colour that the canvas will be filled with
     */
    static fillCanvas(canvas, colour = '#FF10F0') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.beginPath();
        ctx.rect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = colour;
        ctx.fill();
    }
    /**
     * Loads a new image into an HTMLImageElement
     * WARNING: This happens async. Therefor the result might not immediately be visible
     *
     * @param source the path of the image to be loaded
     * @returns the image
     */
    static loadNewImage(source) {
        const img = new Image();
        img.src = source;
        return img;
    }
    /**
     *
     * @param canvas that canvas that it should be drawn on
     * @param image the image to be drawn
     * @param dx x-coordinate
     * @param dy y-coordinate
     */
    static drawImage(canvas, image, dx, dy) {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.drawImage(image, dx, dy);
    }
    /**
     * Clear the canvas, preparing for drawing
     *
     * @param canvas canvas to be cleared
     */
    static clearCanvas(canvas) {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    /**
     * DEPRECATED: Please use writeText
     *
     * @param canvas Canvas to write to
     * @param text Text to write
     * @param xCoordinate x-coordinate of the text
     * @param yCoordinate y-coordinate of the text
     * @param alignment align of the text
     * @param fontFamily font family to use when writing text
     * @param fontSize font size in pixels
     * @param color colour of text to write
     */
    static writeTextToCanvas(canvas, text, xCoordinate, yCoordinate, alignment = 'center', fontFamily = 'sans-serif', fontSize = 20, color = 'red') {
        this.writeText(canvas, text, xCoordinate, yCoordinate, alignment, fontFamily, fontSize, color);
    }
    /**
     *
     * @param canvas Canvas to write to
     * @param text Text to write
     * @param xCoordinate x-coordinate of the text
     * @param yCoordinate y-coordinate of the text
     * @param alignment align of the text
     * @param fontFamily font family to use when writing text
     * @param fontSize font size in pixels
     * @param color colour of text to write
     */
    static writeText(canvas, text, xCoordinate, yCoordinate, alignment = 'center', fontFamily = 'sans-serif', fontSize = 20, color = 'red') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.font = `${fontSize}px ${fontFamily}`;
        ctx.fillStyle = color;
        ctx.textAlign = alignment;
        ctx.fillText(text, xCoordinate, yCoordinate);
    }
    /**
     * Draw a circle outline on the canvas
     *
     * @param canvas the canvas to draw to
     * @param centerX the x-coordinate of the center of the circle
     * @param centerY the y-coordinate of the center of the circle
     * @param radius the radius of the circle
     * @param color the color of the circle outline
     */
    static drawCircle(canvas, centerX, centerY, radius, color = 'red') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }
    /**
     * Draw a rectangle outline to the canvas
     *
     * @param canvas the canvas to draw to
     * @param dx the x-coordinate of the rectangle's left left corner
     * @param dy the y-coordinate of the rectangle's left left corner
     * @param width the width of the rectangle from x to the right
     * @param height the height of the rectrangle from y downwards
     * @param color the color of the rectangle outline
     */
    static drawRectangle(canvas, dx, dy, width, height, color = 'red') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.rect(dx, dy, width, height);
        ctx.stroke();
    }
    /**
     * Draw a filled circle on the canvas
     *
     * @param canvas the canvas to draw to
     * @param centerX the x-coordinate of the center of the circle
     * @param centerY the y-coordinate of the center of the circle
     * @param radius the radius of the circle
     * @param color the color of the circle
     */
    static fillCircle(canvas, centerX, centerY, radius, color = 'red') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
    /**
     * Draw a filled rectangle to the canvas
     *
     * @param canvas the canvas to draw to
     * @param dx the x-coordinate of the rectangle's left left corner
     * @param dy the y-coordinate of the rectangle's left left corner
     * @param width the width of the rectangle from x to the right
     * @param height the height of the rectrangle from y downwards
     * @param color the color of the rectangle
     */
    static fillRectangle(canvas, dx, dy, width, height, color = 'red') {
        const ctx = CanvasUtil.getCanvasContext(canvas);
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.rect(dx, dy, width, height);
        ctx.fill();
    }
}
//# sourceMappingURL=CanvasUtil.js.map
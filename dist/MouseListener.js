/**
 * Helper class for managing the mouse
 *
 * @author Frans Blauw
 */
class MouseListener {
    /**
     *
     * @param canvas the canvas element to which the relative coordinates should given
     * @param disableContextMenu true to disable the context (right click) menu. Default: false
     */
    constructor(canvas, disableContextMenu = false) {
        this.mouseCoordinates = { x: 0, y: 0 };
        this.buttonDown = {};
        this.buttonQueried = {};
        canvas.addEventListener('mousemove', (ev) => {
            this.mouseCoordinates = {
                x: ev.offsetX,
                y: ev.offsetY,
            };
        });
        canvas.addEventListener('mousedown', (ev) => {
            this.buttonDown[ev.button] = true;
        });
        canvas.addEventListener('mouseup', (ev) => {
            this.buttonDown[ev.button] = false;
            this.buttonQueried[ev.button] = false;
        });
        if (disableContextMenu) {
            canvas.addEventListener('contextmenu', (ev) => {
                ev.preventDefault();
            });
        }
    }
    /**
     * Checks whether a mouse button is currently down.
     *
     * @param buttonCode the mouse button to check
     * @returns `true` when the specified button is currently down
     */
    isButtonDown(buttonCode = 0) {
        return this.buttonDown[buttonCode];
    }
    /**
     *
     * @param buttonCode the mouse button to check
     * @returns `true` when the specified button was pressed
     */
    buttonPressed(buttonCode = 0) {
        if (this.buttonQueried[buttonCode] === true)
            return false;
        if (this.buttonDown[buttonCode] === true) {
            this.buttonQueried[buttonCode] = true;
            return true;
        }
        return false;
    }
    /**
     * Returns the current mouse coordinates in an object
     *
     * @returns MouseCoordinates object with current position of mouse
     */
    getMousePosition() {
        return this.mouseCoordinates;
    }
}
MouseListener.BUTTON_LEFT = 0;
MouseListener.BUTTON_MIDDLE = 1;
MouseListener.BUTTON_RIGHT = 2;
export default MouseListener;
//# sourceMappingURL=MouseListener.js.map
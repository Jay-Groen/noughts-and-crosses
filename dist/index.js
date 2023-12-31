import Game from './Game.js';
/*
 * Start the game whenever the entire DOM is loaded
 */
const init = () => new Game(document.getElementById('canvas'));
// Add EventListener to load the game whenever the browser is ready
window.addEventListener('load', init);
//# sourceMappingURL=index.js.map
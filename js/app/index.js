import GameState from "./gamestate";

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const gameState = new GameState();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  window.player.handleInput(allowedKeys[e.keyCode]);
});

// Export global objects
window.gameState = gameState;
window.allEnemies = gameState.enemies;
window.player = gameState.player;

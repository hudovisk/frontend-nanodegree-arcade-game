// Base Entity class
class Entity {
  constructor(gameState) {
    this.gameState = gameState;
  }

  drawCollisionBox() {
    const { x, y, width, height } = this.collisionRect;
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = "red";
    ctx.rect(x, y, width, height);
    ctx.stroke();
  }

  // Draw the entity on the screen, required method for game
  render() {
    if (this.gameState.debugCollision) {
      this.drawCollisionBox();
    }
  }
}

export default Entity;

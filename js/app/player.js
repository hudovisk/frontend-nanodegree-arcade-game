import Entity from "./entity";

import { intersects } from "./utils";

const Y_OFFSET = -30;
const X_OFFSET = 0;

class Player extends Entity {
  constructor(gameState) {
    super(gameState);
    this.sprite = "images/char-boy.png";

    this.width = 101;
    this.height = 171;

    this.reset();
  }

  reset() {
    this.row = 4;
    this.col = 2;
  }

  get x() {
    return this.col * 101;
  }

  get y() {
    return this.row * 83;
  }

  get collisionRect() {
    const x = this.x + 10;
    const y = this.y + 70;
    const width = 80;
    const height = 50;

    return {
      x,
      y,
      width,
      height,
      x2: x + width,
      y2: y + height
    };
  }

  update(dt) {
    if (this.row === 0) {
      this.gameState.win();
      this.reset();
    }
  }

  handleInput(input) {
    switch (input) {
      case "left":
        this.col = Math.max(0, this.col - 1);
        break;
      case "right":
        this.col = Math.min(4, this.col + 1);
        break;
      case "up":
        this.row = Math.max(0, this.row - 1);
        break;
      case "down":
        this.row = Math.min(5, this.row + 1);
        break;
    }
  }

  render() {
    super.render();

    ctx.drawImage(
      Resources.get(this.sprite),
      this.x + X_OFFSET,
      this.y + Y_OFFSET
    );
  }
}

export default Player;

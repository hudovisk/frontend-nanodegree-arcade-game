import Entity from "./entity";
import { intersects } from "./utils";

const MAX_VELOCITY = 300;
const MIN_VELOCITY = 100;

const Y_OFFSET = -30;
const X_OFFSET = 0;

const ANIMATION_DURATION = 10;

class Enemy extends Entity {
  constructor(gameState) {
    super(gameState);

    this.sprite = "images/enemy-bug.png";
    this.width = 101;
    this.height = 171;

    this.reset();
  }

  reset() {
    const directionY = 0;
    const directionX = Math.random() > 0.5 ? 1 : -1;
    const row = Math.min(Math.floor(Math.random() * 3), 2);
    const velocity = Math.max(Math.random() * MAX_VELOCITY, MIN_VELOCITY);

    this.velocity = velocity;
    this.direction = [directionX, directionY];
    this.y = row * 83 + 83;
    this.x = directionX > 0 ? -101 : 606;
    this.animationDt = 0;
  }

  get collisionRect() {
    const x = this.x;
    const y = this.y + 50;
    const width = 101;
    const height = 83;

    return {
      x,
      y,
      width,
      height,
      x2: x + width,
      y2: y + height
    };
  }

  isOusideMap() {
    return (
      this.x > ctx.canvas.width + this.width ||
      this.x < -this.width ||
      this.y > ctx.canvas.height + this.height ||
      this.y < -this.height
    );
  }

  update(dt) {
    const player = this.gameState.player;
    if (intersects(this.collisionRect, player.collisionRect)) {
      this.gameState.lose();
      this.gameState.score -= 100;
      player.reset();
    }

    this.x += this.direction[0] * this.velocity * dt;
    this.y += this.direction[1] * this.velocity * dt;

    if (this.isOusideMap()) {
      this.reset();
    }

    this.animationDt += dt;
  }

  render() {
    super.render();
    if (this.direction[0] < 0) {
      ctx.translate(this.x + X_OFFSET + this.width, this.y + Y_OFFSET);
      ctx.scale(-1, 1);
    } else {
      ctx.translate(this.x + X_OFFSET, this.y + Y_OFFSET);
      ctx.scale(1, 1);
    }
    const animationFrequency = (1 / ANIMATION_DURATION) * this.velocity;
    const animationAngle =
      Math.sin(animationFrequency * this.animationDt) * 0.02;

    ctx.rotate(animationAngle);

    ctx.drawImage(Resources.get(this.sprite), 0, 0);
  }
}

export default Enemy;

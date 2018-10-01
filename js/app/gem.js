import Entity from "./entity";
import { intersects } from "./utils";

const X_OFFSET = 30;
const Y_OFFSET = 40;

const ANIMATION_DURATION = 0.3;

const SPRITES = [
  "images/gem-blue.png",
  "images/gem-orange.png",
  "images/gem-green.png"
];

class Gem extends Entity {
  constructor(gameState) {
    super(gameState);

    Resources.load(SPRITES);

    this.reset();
  }

  reset() {
    const spriteIdx = Math.min(2, Math.floor(Math.random() * 3));
    this.sprite = SPRITES[spriteIdx];

    this.row = Math.max(Math.min(3, Math.floor(Math.random() * 4)), 1);
    this.col = Math.min(4, Math.floor(Math.random() * 5));
    this.animationDt = 0;
  }

  get x() {
    return this.col * 101;
  }

  get y() {
    return this.row * 83;
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

  update(dt) {
    const player = this.gameState.player;
    if (intersects(this.collisionRect, player.collisionRect)) {
      this.gameState.score += 10;
      this.reset();
    }

    this.animationDt += dt;
  }

  render() {
    super.render();

    ctx.translate(this.x + X_OFFSET, this.y + Y_OFFSET);
    ctx.scale(0.4, 0.4);

    const animationFrequency = 1 / ANIMATION_DURATION;
    const translateY = Math.sin(animationFrequency * this.animationDt) * 10;
    ctx.translate(0, translateY);

    ctx.drawImage(Resources.get(this.sprite), 0, 0);
  }
}

export default Gem;

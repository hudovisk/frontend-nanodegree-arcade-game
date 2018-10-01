import Player from "./player";
import Enemy from "./enemy";
import Gem from "./gem";

class GameState {
  constructor() {
    document
      .getElementById("debug-chk")
      .addEventListener(
        "change",
        () => (this.debugCollision = !this.debugCollision)
      );
    this.scoreElement = document.getElementById("score");
    this.stateElement = document.getElementById("state");
    this.reset();
  }

  reset() {
    this.enemies = [new Enemy(this), new Enemy(this), new Enemy(this)];
    this.player = new Player(this);
    this.gems = [new Gem(this), new Gem(this)];

    this.debugCollision = false;
    this.score = 0;
  }

  lose() {
    this.stateElement.innerHTML = "You Lost";
  }

  win() {
    this.stateElement.innerHTML = "You WIN!";
  }

  get score() {
    return this._score;
  }

  set score(val) {
    this.scoreElement.innerHTML = `Score: ${val}`;
    this._score = val;
  }

  get entities() {
    return [...this.gems, ...this.enemies, this.player];
  }

  render() {
    this.entities.forEach(entity => {
      ctx.save();

      entity.render();

      ctx.restore();
    });
  }

  update(dt) {
    this.entities.forEach(entity => {
      entity.update(dt);
    });
  }
}

export default GameState;

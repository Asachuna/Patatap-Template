//Open Processingにアップする際はこの行を削除して下さい
import p5 from "p5";

export interface AnimationsInterface {
  active: boolean;
  life: number;
  count: number;

  animate(p: p5): void;
  draw(p: p5): void;
  sound(p: p5): void;
}

export class Animations implements AnimationsInterface {
  active: boolean;
  life: number;
  count: number;

  constructor(p: p5) {
    this.active = true;
    this.life = 0;
    this.count = 0;
  }

  animate(p: p5) {
    this.sound(p);
    this.draw(p);
    this.count += 1;
    if (this.count > this.life) {
      this.active = false;
    }
  }

  draw(p: p5) {}
  sound(p: p5) {}
}

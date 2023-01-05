//Open Processingにアップする際はこの行を削除して下さい
import p5 from "p5";
import { getAnimation } from "./animations";
import { Animations } from "./base_class";

let animations: Animations[] = [];

const sketch = (p: p5) => {
  p.preload = () => {};

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.noStroke();
  };

  p.draw = function () {
    p.background(255);

    //アニメーションの描画
    for (const anim of animations) {
      anim.animate(p);
    }

    //不要なアニメーションを削除
    animations = animations.filter((anim) => anim.active);
  };

  p.keyTyped = function () {
    //アニメーションの追加
    const key: string = p.key;
    const newAnimation = getAnimation(key);

    if (newAnimation) {
      animations.push(new newAnimation(p));
    }
  };
};

new p5(sketch);

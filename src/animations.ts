import { Animations } from "./base_class";
import p5 from "p5";

class key_A extends Animations {
  constructor(p: p5) {
    super(p);
    this.life = 10;
  }
}

class key_S extends Animations {
  constructor(p: p5) {
    super(p);
    this.life = 10;
  }
}

export const animationsList = new Map<string, typeof Animations>([
  ["a", key_A],
  ["s", key_S],
]);

export const getAnimation = (key: string): typeof Animations | undefined => {
  return animationsList.get(key);
};

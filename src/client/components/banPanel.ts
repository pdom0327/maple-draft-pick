import { Sprite } from 'pixi.js';
import { Portrait } from './portrait';
import { Tween, Easing } from '@tweenjs/tween.js';

export class BanPanel extends Portrait {
  private _isNext = false;
  private _tween: Tween<Sprite>;
  nextOverlay: Sprite;

  constructor(size: number) {
    super({ size: size });

    this.nextOverlay = this.addChild(
      Sprite.from('../assets/portraits/next_ban.png')
    );
    this.nextOverlay.alpha = 0;
    this._tween = new Tween(this.nextOverlay)
      .to({ alpha: 1 }, 500)
      .easing(Easing.Quadratic.InOut)
      .repeat(Infinity)
      .yoyo(true);
  }

  get isNext(): boolean {
    return this._isNext;
  }

  set isNext(value: boolean) {
    this._isNext = value;

    if (this._isNext) {
      this._tween.start();
    } else {
      this._tween.stop();
      this.nextOverlay.alpha = 0;
    }
  }
}

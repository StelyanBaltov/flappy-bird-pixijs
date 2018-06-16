import { GameObject } from "../game-objects/game-object";

export interface IGravityBehavior {
    gameObject: GameObject;
    velocityY: number;
    isHitted: boolean;
    gravityPower: number;
    gravityTicker: PIXI.ticker.Ticker;
    gravity(): void;
    dispose(): void;
}
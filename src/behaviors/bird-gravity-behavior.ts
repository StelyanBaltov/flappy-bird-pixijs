import { IGameObject } from "../interfaces/game-object";
import { IGravityBehavior } from "../interfaces/behaviors/gravity-behavior";
import { World } from "../models/world";

export class BirdGravityBehavior implements IGravityBehavior {
    public gameObject: IGameObject;
    public gravityPower: number = 0.1;
    public gravityTicker: PIXI.ticker.Ticker;

    constructor(bird: IGameObject, velocityY = 0) {
        this.gameObject = bird;
        this.velocityY = velocityY;

        this.gravityTicker = new PIXI.ticker.Ticker();
        this.gravityTicker.add(this.gravity.bind(this));
        this.gravityTicker.start();
    }

    public gravity(): void {
        if (this.velocityY < 10) {
            this.velocityY += this.gravityPower;
        }

        if (this.velocityY > 0 && World.isObjectOnGround(this.gameObject)) {
            return;
        }

        this.gameObject.body.y += this.velocityY;
    }

    public dispose(): void {
        this.gameObject = null;
        this.gravityTicker.stop();
        this.gravityTicker = null;
    }

    get velocityY(): number {
        return this.gameObject.velocityY;
    }

    set velocityY(value: number) {
        this.gameObject.velocityY = value;
    }
}

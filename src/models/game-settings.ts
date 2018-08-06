export class GameSettings {
    //game resolution
    public gameWidth: number = 144;
    public gameHeight: number = 256;

    //bird settings
    public birdStartingXPosition: number = this.gameWidth / 3;
    public birdStartingYPosition: number = this.gameHeight / 5;
    public birdStartingVelocity: number = -2;

    //obstacles settings
    public pipeObstaclesGap: number = 45;
    public obstaclesDistance: number = 45;
    public obstaclesSpeed: number = 1;

    public groundYPos: number = 0;

    private static instance: GameSettings = new GameSettings();

    constructor() {
        if (GameSettings.instance) {
            throw new Error("Error: Instantiation failed: Use GameSettings.getInstance() instead of new.");
        }
        GameSettings.instance = this;
    }

    public static getInstance(): GameSettings {
        return GameSettings.instance;
    }
}
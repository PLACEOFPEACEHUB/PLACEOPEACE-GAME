
export default class BootScene extends Phaser.Scene {
    constructor() {
        super('BootScene');
    }

    preload() {
        this.load.image('background', 'assets/sprites/dojo_bg.png');
        this.load.image('player', 'assets/sprites/player.png');
        this.load.image('enemy', 'assets/sprites/enemy.png');
    }

    create() {
        this.scene.start('TitleScene');
    }
}

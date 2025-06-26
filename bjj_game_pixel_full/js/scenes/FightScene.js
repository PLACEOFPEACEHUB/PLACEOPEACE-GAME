
export default class FightScene extends Phaser.Scene {
    constructor() {
        super('FightScene');
    }

    create() {
        this.add.image(384, 384, 'background');

        this.player = this.physics.add.sprite(200, 500, 'player');
        this.enemy = this.physics.add.sprite(500, 500, 'enemy');

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        this.player.setVelocity(0);
        if (this.cursors.left.isDown) this.player.setVelocityX(-200);
        if (this.cursors.right.isDown) this.player.setVelocityX(200);
        if (this.cursors.up.isDown) this.player.setVelocityY(-200);
        if (this.cursors.down.isDown) this.player.setVelocityY(200);
    }
}


export default class TitleScene extends Phaser.Scene {
    constructor() {
        super('TitleScene');
    }

    create() {
        this.add.image(384, 384, 'background');
        this.add.text(200, 200, 'PLACE OF PEACE BJJ', { fontSize: '32px', fill: '#ffffff' });
        this.add.text(200, 250, 'Press SPACE to Begin', { fontSize: '20px', fill: '#ffffff' });

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('FightScene');
        });
    }
}


import BootScene from './scenes/BootScene.js';
import TitleScene from './scenes/TitleScene.js';
import FightScene from './scenes/FightScene.js';

const config = {
    type: Phaser.AUTO,
    width: 768,
    height: 768,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [BootScene, TitleScene, FightScene]
};

new Phaser.Game(config);

var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });

game.state.add('menu', Menu);
game.state.add('anim', Game);
 
game.state.start('menu');



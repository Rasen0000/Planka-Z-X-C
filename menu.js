/* var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create});
 */
var button;
var Menu = {

preload: function () {
	game.load.image('panel', 'img/grey_panel.png');
	game.load.spritesheet('greenSheet', 'img/greenSheet.png', 190, 46.3);
}




create: function() { 
	game.stage.backgroundColor = '#182d3b';
    button = game.add.button(game.world.centerX - 95, 400, 'greenSheet', actionOnClick, this, 1, 2, 3);///actionOnClick какое то действие
	button.onInputOver.add(over, this);
    button.onInputOut.add(out, this);
    button.onInputUp.add(up, this);

}

function up() {
    console.log('button up', arguments);
}

function over() {
    console.log('button over');
}

function out() {
    console.log('button out');
}

function actionOnClick () {

    this.state.start('Game');;

}

}








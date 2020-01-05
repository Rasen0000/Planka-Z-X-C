var box2d = {
	b2Vec2: Box2D.Common.Math.b2Vec2,
	b2BodyDef: Box2D.Dynamics.b2BodyDef,
	b2Body: Box2D.Dynamics.b2Body, 
	b2FixtureDef: Box2D.Dynamics.b2FixtureDef,
	b2Fixture: Box2D.Dynamics.b2Fixture,
	b2World: Box2D.Dynamics.b2World,
	b2MassData: Box2D.Collision.Shapes.b2MassData,
	b2PolygonShape: Box2D.Collision.Shapes.b2PolygonShape,
	b2CircleShape: Box2D.Collision.Shapes.b2CircleShape,
	b2DebugDraw: Box2D.Dynamics.b2DebugDraw
};

var SCALE=30;


var button;

let a =(function() {
	var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create})
	
	/* game.state.add("Game",Game); */
	
function preload() {
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	    game.scale.pageAlignHorizontally = true;///выравнивание элемента по горизонтали
    game.scale.pageAlignVertically = true;
	game.load.image('panel', 'img/grey_panel.png');
	game.load.spritesheet('greenSheet', 'img/greenSheet.png', 190, 46.3);
}




function create() { 
	game.stage.backgroundColor = '#182d3b';
    button = game.add.button(game.world.centerX - 95, 400, 'greenSheet', StartGame, this, 1, 2, 3);///Game какое то действие
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

function StartGame(){
	 
	Game();
	game.destroy();
}

/* function actionOnClick () {

    game.state.start('Game');;

} */




function Game() {
	
	var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });


var Game;
var Menu;
var ball1;
var ball2;
var ball3;
var randomGrav;
var randomGravTest;
var Grav1;
var Grav2;
var Grav3;
var paddle;

function preload() {
game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;///выравнивание элемента по горизонтали
    game.scale.pageAlignVertically = true;
    game.load.image('ball', 'img/ball.png');
	game.load.image('paddle', 'img/paddle.png');
}

var handle1;
var handle2;
var handle3;

var line1;
var line2;

function create() {
	game.physics.startSystem(handle1,Phaser.Physics.ARCADE);
	game.physics.arcade.checkCollision.top = false;
    game.stage.backgroundColor = '#160584';
	/* game.physics.world.gravity.y=2000; */

    handle1 = game.add.sprite(300, 500, 'ball', 0);////условная голова
    handle1.anchor.set(0.5);
    handle1.inputEnabled = true;
    handle1.input.enableDrag(true);
	game.physics.enable(handle1, Phaser.Physics.ARCADE);
	handle1.body.gravity.y = 5;
	handle1.checkWorldBounds = true;
	handle1.body.collideWorldBounds = true;///перестает проходит сквозь стены
	/* handle1.body.bounce.set(1); */
	
    handle2 = game.add.sprite(450, 460, 'ball', 0);////условный таз
    handle2.anchor.set(0.5);
    handle2.inputEnabled = true;
    handle2.input.enableDrag(true);
	game.physics.enable(handle2, Phaser.Physics.ARCADE);
	handle2.body.gravity.y = 5;
	handle2.checkWorldBounds = true;
	handle2.body.collideWorldBounds = true;
	
	
	handle3 = game.add.sprite(600, 460, 'ball', 0);////условные ноги
    handle3.anchor.set(0.5);
    handle3.inputEnabled = true;
    handle3.input.enableDrag(true);
	game.physics.enable(handle3, Phaser.Physics.ARCADE);
	handle3.body.gravity.y = 5;
	handle3.checkWorldBounds = true;
	handle3.body.collideWorldBounds = true;
	
	paddle = game.add.sprite(handle2.x - handle1.x, handle2.y - handle1.y, 'paddle', 100);
	/* paddle.anchor.set(0.5); */
	paddle.scale.setTo(handle2.x / handle1.x, handle2.y / handle1.y);
	game.physics.enable(paddle, Phaser.Physics.ARCADE);
	paddle.inputEnabled = true;
	paddle.body.gravity.y=5;
/* 	paddle.trackSprite(handle1, 1, 1, true)  */
	
	paddle.body.collideWorldBounds = true;
	
	

	/* line1= game.add.sprite(30, 'paddle');////попытка прицепить фигуры */
	
	/* line1.trackSprite(handle1, 20, 40, true)
	line2= game.add.sprite(20, 'paddle'); */
	

    line1 = new Phaser.Line(handle1.x, handle1.y, handle2.x, handle2.y, 20,20);
	line2 = new Phaser.Line(handle2.x, handle2.y, handle3.x, handle3.y);
	
	KeyZ = game.input.keyboard.addKey(Phaser.Keyboard.Z);
	KeyX = game.input.keyboard.addKey(Phaser.Keyboard.X);
	KeyC = game.input.keyboard.addKey(Phaser.Keyboard.C);
	
	Grav1 = handle1.body.gravity.y;
	Grav2 = handle2.body.gravity.y;
	Grav3 = handle3.body.gravity.y;
}

function update() {
	
	game.physics.arcade.collide(paddle, handle1); 
	game.physics.arcade.collide(paddle, handle2);
	game.physics.arcade.collide(paddle, handle3); 	
    line1.fromSprite(handle1, handle2, false);
	line2.fromSprite(handle2, handle3, false);
	
	paddle.body.velocity.y= handle1.body.velocity.y;
	
	
	if (KeyZ.isDown)
    {
        handle1.body.velocity.y = -5;
	
	function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
} 
if (randomInteger =2) {
handle2.body.gravity.y = handle2.body.gravity.y+0.2;
}

else if  (randomInteger =3) {
handle3.body.gravity.y = handle3.body.gravity.y+0.2;
}	
	
	}
else {
		handle1.body.acceleration.set(0);
	} 
	
	
 
    if (KeyX.isDown)
    {
        handle2.body.velocity.y = -5;
		
		
	function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
} 
if (randomInteger =3) {
handle3.body.gravity.y = handle3.body.gravity.y+0.2;
}

else if  (randomInteger =1) {
handle1.body.gravity.y = handle1.body.gravity.y+0.2;
}	
	

     }
    else if (KeyC.isDown)
    {
        handle3.body.velocity.y = -5;

	function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
} 
if (randomInteger =1) {
handle1.body.gravity.y = handle1.body.gravity.y+0.2;
}

else if  (randomInteger =2) {
handle2.body.gravity.y = handle2.body.gravity.y+0.2;
}	
	
    }
	
/* 	if (randomInteger = 1)
	{
		handle1.body.gravity.y =200;
	}
	
 	if (randomInteger = 2)
	{
		handle2.body.gravity.y =200;
	}
	
 	if (randomInteger = 3)
	{
		handle3.body.gravity.y =200;
	} */
	
 
 
}

function render() {

    game.debug.geom(line1);
	game.debug.geom(line2);
    game.debug.lineInfo(line1, 32, 32);
	game.debug.lineInfo(line2, 32, 332);

    game.debug.text("Drag the handles", 32, 550);

}
};
}());
/* function randoGrav1(){
	handle3.body.gravity.y = 200;
}

function randoGrav2(){
	handle1.body.gravity.y = 200;
}

function randoGrav3(){
	handle2.body.gravity.y = 200;
} */

/* function getRand(){
	Math.floor(Math.random(handle1.body.gravity.y, handle2.body.gravity.y, handle3.body.gravity.y)+200);
} */


/* function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
} */



/////https://phaser.io/examples/v2/weapon/asteroids
/////https://kenney.nl/assets
 ///'use strict'; с ним фреймворк не работает


const SCALE=30;


let button;

let a =(function() {
	let game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create})
	
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
	window.onload = runMyShit;

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

/* попытка добавить движок Matter.js  */

const runMyShit = () => {
	const Engine = Matter.Engine, /// содержит методы для создания и управления движками
		Render = Matter.Render, ///базовый рендерер на основе холста HTML5. Этот модуль необходим для визуализации различных движков.
		World = Matter.World, /// используется для создания и управления миром, в котором работает движок
		Composites = Matter.Composites,
		Composite = Matter.Composite,
		Constraint = Matter.Constraint,
		Events = Matter.Events,
		Body = Matter.Body,
		Bodies = Matter.Bodies; ////позволяет создавать объекты твердого тела

	const engine = Engine.create(document.getElementById('game'));
/* 		const SCREEN_SIZE = {
		width: document.body.clientWidth,
		height: document.body.clientHeight
	}; */

	const render = Render.create({	/// создания нового рендерера
		element: window.document.body,	///ключ element, куда библиотека вставляет холст, можно поменять на canvas
		engine: engine, ///указание движка, который должен использоваться для визуализации мира
/* 		options: {
			width: SCREEN_SIZE.width,
			height: SCREEN_SIZE.height,
			wireframes: false ////каркас
		} */
	});
	
	const ballA1 = Bodies.circle(500, 50, 30); ///круг x/y/радиус/
	Matter.Body.setMass(ballA1, 1000);
	
	World.add(engine.world, [ballA1]);
	
	
	Engine.run(engine); ///запуск движка
	Render.run(render); ///запуск рендера
	
	};
	
	
	
	

function StartGame(){
	 
	Game();
	game.destroy();
}

/* function actionOnClick () {

    game.state.start('Game');;

} */




function Game() {
	
	const game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render }, );


let Game;
let Menu;
let ball1;
let ball2;
let ball3;
let randomGrav;
let randomGravTest;
let Grav1;
let Grav2;
let Grav3;
let paddle;

function preload() {
game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;///выравнивание элемента по горизонтали
    game.scale.pageAlignVertically = true;
    game.load.image('ball', 'img/ball.png');
	game.load.image('paddle', 'img/paddle.png');
}

let handle1;
let handle2;
let handle3;

let line1;
let line2;

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

    game.debug.text("Недопустить падение шариков, нажимай Z X C", 32, 550);

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
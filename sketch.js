const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy1, boyImage;

function preload()
{
	boyImage=loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy1 = createSprite(100, 580, 10, 10);
	boy1.addImage(boyImage);
	boy1.scale=0.1;

	//stone1 = new Stone(100, 540, 10, 10);
	stone2 = new Stone(100, 540, 10, 10)
	ground1 = new Ground(400, 640, 800, 10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ground1.display();
 // stone1.display();
 stone2.display();
  
  drawSprites();
 
}




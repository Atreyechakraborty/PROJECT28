
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
mangoImg = loadImage("mango.png");
boyImg=loadImage ("boy.png");
treeImg=loadImage("tree.png")
stoneImg=loadImage("stone.png")	
}

function setup() {
	createCanvas(1500, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree=createSprite(900,300,10,10);
	tree.addImage(treeImg);
	tree.scale=0.5;
	
	boy=createSprite(200,500,10,10)
	boy.addImage(boyImg);
	boy.scale=0.2;

	stone1=new stone(90,100);
   ;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  

  
  drawSprites();
 
}




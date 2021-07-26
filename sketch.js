
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(200,200);
	plane = new Plane(400,680,800,20);
	stone = new Stone(100,630,70,70);
	rubber = new Rubber(400,620);
	sand1 = new Sand(300,640);
	sand2 = new Sand(305,640);
	sand3 = new Sand(310,640);
	sand4 = new Sand(315,640);
	sand5 = new Sand(320,640);
	sand6 = new Sand(325,640);
	sand7 = new Sand(330,640);
	iron = new Iron(600,630,100,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 Engine.update(engine)
  plane.display();
  stone.display();
  hammer.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  iron.display();
  drawSprites();
 
}




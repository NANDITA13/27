var bob1, bob2, bob3, bob4, bob5;
var roof;
var rope1 , rope2 , rope3 , rope4 , rope5;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bob1 = new Bob (300,400);

	bob2 = new Bob (400,400);

	bob3 = new Bob (500,400);

	bob4 = new Bob (600,400);

	bob5 = new Bob (700,400);

	


	roof = new Roof (500,50,600,15);


	Engine.run(engine);
  
}


function draw() {
  
  background(0);

  roof.display ();

  bob1.display ();

  bob2.display ();

  bob3.display ();

  bob4.display ();

  bob5.display ();

  rope1.display ();

  rope2.display ();

  rope3.display ();

  rope4.display ();

  rope5.display ();
  
  
 
}




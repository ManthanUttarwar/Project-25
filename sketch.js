
const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
var paperball,ground1,dustbin1,dustbin2,dustbin3

function preload()
{
	 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   paperball = new paper(100,200,90/2);

   ground1 = new Ground(400,650,800,20);

   dustbin1 = new dustbin(600,630,180,20);

   dustbin2 = new dustbin(520,550,20,200)
   dustbin2.shapeColor = "red";

   dustbin3 = new dustbin(680,550,20,200);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(255);
  
  ground1.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paperball.display();

 
}

function keyPressed()
{
    if(keyCode === UP_ARROW)
    {
        Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
    }
}



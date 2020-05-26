
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	

	dustbin1= new Dustbin (600,580,20,100);
dustbin2=new Dustbin(655,620,90,20);
dustbin3= new Dustbin(710,580,20,100);
ground= new Ground(width/2, 670, width, 20);
paper= new Paper(200,450,25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
ground.display();
paper.display();

 
  
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:105,y:-100});
	}
}



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var plinko;
var engine,world;

function preload(){
	
}

function setup() {
  createCanvas(800,800);
  rectMode(CENTER);

  engine = Engine.create();
  world = engine.world;

  Engine.run(engine);

  ground = new Ground(700,height-20,1800,20);

  plinko= new Plinko(150,400,36,36);
  
}

function draw() {
  rectMode(CENTER);
  background(0); 

  Engine.update(engine);

  ground.display();
   
  plinko.display();

}
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; // for attaching different objects together
const Body = Matter.Body;
const Composites = Matter.Composites;  // for grouping objects which are sharing similar propeties 
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var fruit;
var fruitLink;

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope( 4, {x:245,y:30});

   var op={
     density : 0.001
   }
  fruit= Bodies.circle(300,300,15,op)
 Matter.Composite.add(rope.body,fruit)

 fruitLink= new Link( rope,fruit)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  
}

function draw() 
{
  background(51);
  
  ground.show();
  ellipse(fruit.position.x,fruit.position.y,15,15);
  rope.show()

  Engine.update(engine);
  
 
 
   
}

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop, umbrella;

function preload(){
    
}

function setup(){
   createCanvas(1000, 1000);
   engine = Engine.create();
   world = engine.world;
    umbrella = new Umbrella(500, 750, 10, 10);
    drop = new Drop(500, 700, 10);
    //drop = new Drop(500, 300, 10, 10);
}

function draw(){
    Engine.update(engine)
    umbrella.display();
    drop.display();
}   


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var bg,ground,boogie1,boogie2,boogie3,chain1,chain2
var rock1,trainSound,crashSound
var flag=0
function preload() {
  bg=loadImage("images/bg.jpg")
  crashSound=loadSound("sound/train_crossing.mp3")
  trainSound=loadSound("sound/train_crossing.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,380,1200,10)
   boogie1=new Boggie(50)
    boogie2=new Boggie(150)
    boogie3=new Boggie(250)
    rock1=new Rock(1000,350,256,256)
     chain1=new Chain(boogie1.body,boogie2.body)
    chain2=new Chain(boogie2.body,boogie3.body)
}

function draw(){
   background(bg)
   Engine.update(engine);
   ground.display()
   boogie1.display()
   boogie2.display()
   boogie3.display()
   rock1.display()
   chain1.display()
   chain2.display()
    
}


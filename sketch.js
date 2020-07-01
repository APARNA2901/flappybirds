const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rocket;
var engine, world;
var bg;
var position;


function preload(){
  bg = loadImage("./images/background.png");
 
}

function setup() {
  engine = Engine.create();
 world = engine.world;
 var canvas = createCanvas(400,400);
//var bg = createSprite(width/2, height/2, 50, 50);
 //bgImg.addImage("bgImg",bg);

 rocket = new Rocket(displayWidth/2,300);
 Matter.Body.setPosition (rocket.body , {x:200, y :300});
 
}

function draw() {
  background(bg);
  if (rocket !== undefined){
    
 /* if (keyDown(UP_ARROW)){
    rocket.xPosition += -1;
  }*/

rocket.move();
rocket.display();
  }
Engine.update(engine);


drawSprites();
}

/*function changePosition(){
  rocket.body.position.x = rocket.body.position.x + x;
  rocket.body.position.y = rocket.body.position.y + y;
}
*/






var fairy,fairyImg;
var star,starImg, starBody;
var ground, groundImg;
var hand;
var sound;
    

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
	fairyImg = loadAnimation("fairy1.png");
	starImg = loadAnimation("star.png");
	groundImg = loadImage("night.jpg");
	sound = loadSound("JoyMusic.mp3");

}

function setup() {

	createCanvas(400, 400);

	 

	fairy = createSprite(90,185,200,20);
	fairy.addAnimation("fairy",fairyImg);  
	fairy.scale =0.2;

	star = createSprite(360,30,50,50);
	star.addAnimation("tara",starImg);
	star.scale = 0.2;

	hand = createSprite(195,185,5,5);
	hand.shapeColor="blue";
	hand.visible=false;
	engine = Engine.create();
	world = engine.world;


	var options = {
		restitution:0.5, 
		isStatic:true

	}
	starBody = Bodies.circle(370 , 30 , 5 ,options);
	World.add(world, starBody);


}


function draw() {
  background(groundImg);

  Engine.update(engine);
  star.x=starBody.position.x;
  star.y=starBody.position.y;


 
 
if(hand.isTouching(star)){
	Matter.Body.setStatic(starBody,true);
	fairy.velocityX = 0;
	hand.velocityX = 0;
	sound.play();
}


  drawSprites();

}

function keyPressed() {
	

	if (keyCode === LEFT_ARROW) {
   
		fairy.velocityX = -3;
		hand.velocityX = -3;
	
	  } else if (keyCode === RIGHT_ARROW) {
		fairy.velocityX = 3;
		hand.velocityX = 3;
		
	  }
	  else 
	  if (keyCode === DOWN_ARROW  ) {	
		Matter.Body.setStatic(starBody,false);
		
	  
	  }
}

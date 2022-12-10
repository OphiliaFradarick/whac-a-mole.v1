
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mole, hammer, whac;
var moleImage, hammerImage, whacImage;
var bg,title;
var bgImage, minibgImage, titleImage;
var startButton, endButton;
var gamestate = "start"

var holeX = [160,400,640]
var holeY = [115,360,600]

function preload()
{
	moleImage = loadImage("ImagesAndSounds/mole.png")
	hammerImage = loadImage("ImagesAndSounds/hammer.png")
	bgImage =  loadImage("ImagesAndSounds/molebg.jpg")
	minibgImage = loadImage("ImagesAndSounds/startbg.png")
	titleImage = loadImage("ImagesAndSounds/whackTitle.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	startButton = createImg("ImagesAndSounds/startButton.png")
	startButton.position(250,300)
	startButton.mouseClicked(playState)

	title = createSprite(390,70,400,350)
	title.addImage(titleImage)
	title.visible = false


	bg = createSprite(400,350,800,700)
	bg.addImage(bgImage)
	bg.scale = 3.3
	bg.visible = false

	Engine.run(engine);

	
  
}


function draw() {
//   rectMode(CENTER);
  background("olive");
  
  drawSprites();
  //spawnMoles()
  
  if(gamestate=="start"){
	title.visible = true
  }
  if(gamestate=="play"){
	playState()
	spawnMoles();
	console.log("play state is working")
	
  }
  text(mouseX + "," + mouseY, mouseX, mouseY);
}



function playState(){

	gamestate = "play";
	startButton.hide()
	bg.visible = true
	
}

function spawnMoles(){
	if(frameCount % 60 === 0){
		mole = createSprite(160,115,70,70)
		mole.scale = 0.23
		console.log(World.frameCount)
		// mole.x = random(holeX)
		// mole.y = random(holeY)

		var randomPosition = Math.round(random(1,9))
		switch(randomPosition){
         case 1: mole.x = 160;
		         mole.y = 115;
		 break;

		 case 2: mole.x = 400;
		 mole.y = 115;
         break;

		 case 3: mole.x = 645;
		 mole.y = 115;
         break;

		 case 4: mole.x = 160;
		 mole.y = 360;
         break;

		 case 5: mole.x = 400;
		 mole.y = 360;
         break;

		 case 6: mole.x = 640;
		 mole.y = 360;
		 break;

		 case 7: mole.x = 160;
		 mole.y = 600;
		 break;

		 case 8: mole.x = 400;
		 mole.y = 600;
		 break;

		 case 9: mole.x = 640;
		 mole.y = 600;
		 break;

		 default: break;

		}

		mole.addImage(moleImage)
		bg.depth = mole.depth
		mole.depth = mole.depth + 1
		
	}
}

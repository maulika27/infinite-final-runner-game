var fishImg, wormImg;
var backgroundImg;
var foodGroup 

function preload(){
  fishImg = loadImage("fish.png")
  wormImg = loadImage("worm.jpg")
  backgroungImg = loadImage("sea floor.jpg")
}


function setup() {
  createCanvas(displayWidth - 30, displayHeight-20);
  
  fish = createSprite(10, 100, 50, 50)
  fish.addImage("FishImg", fishImg);
  fish.scale = 0.15
  
  foodGroup = new Group ();

}
 

function draw(){
 background(backgroungImg); 
for (var i = 0; i<foodGroup.length; i++){
  if(foodGroup.get(i).isTouching(fish)){
    foodGroup.get(i).visible = false;
    
  }
}

 
camera.position.y = displayHeight/2;
camera.position.x = fish.x
spawnWorm();
drawSprites();
 
}

function spawnWorm(){
 if(frameCount % 60 === 0){
    var worm = createSprite(displayWidth, 50, 50,50);
    worm.addImage(wormImg);
    worm.velocityX = -10;
    worm.scale = 0.1;
    worm.lifetime = 200;
    foodGroup.add(worm);
  }
}
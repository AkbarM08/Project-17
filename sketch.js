
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime, ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,395, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  
  survivalTime = 0;
  
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {
  background("light_grey");
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  
  if(ground.x<0){
     ground.x = ground.width/2;
    }
  
  monkey.collide(ground);
  
  Score();
  food();
  spawnObstacles();
  
  drawSprites();
}


function Score(){
  survivalTime = Math.round(frameCount/50);
  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time: " + survivalTime, 50, 30);

}

function food(){
  if(frameCount%80 === 0){
    banana = createSprite(390, 200, 20, 20);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.y = Math.round(random(120, 200));
    banana.lifetime = 120;
    bananaGroup.add(banana);
  }
}


function spawnObstacles(){
 if(frameCount%300 === 0){
    obstacle = createSprite(390,370,100,100);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -4;
    obstacle.lifetime = 120;
    obstacleGroup.add(obstacle);
    }
}
  
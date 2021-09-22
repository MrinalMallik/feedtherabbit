var garden,rabbit;
var gardenImg,rabbitImg;
var apple,apple_falling;
var leaves,leavesFalling;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  applefalling = loadImage("apple.png");
  leavesFalling = loadImage("orangeLeaf.png");
  
}

function setup(){
   
  createCanvas(400,400);
  
// Moving background
garden = createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg); 

}


function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  
  
  var selectSprites = Math.round(random(1,2));
  
 if(frameCount % 80 == 0) {
   if(selectSprites == 1){
     applesFalling();
   }
   else if(selectSprites == 2){    
     leafFalling();
   }
 }  

  drawSprites();
  
}

function applesFalling(){

apple = createSprite(random(100,300),100,10,10) ;
apple.addImage(applefalling); 
apple.scale = 0.05;
apple.velocityY = 2; 
apple.setLifetimeEach = 2;
  
}

function leafFalling(){
  
leaves = createSprite(random(100,300),50,10,10);
leaves.addImage(leavesFalling);  
leaves.velocityY = 2; 
leaves.scale = 0.05;
leaves.setLifetimeEach = 2;
}


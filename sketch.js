var cinderella, cinderellaImg, backgroundImg
function preload(){
 cinderellaImg=loadImage("cin1.png")
 backgroundImg=loadImage("castle.jpg")
 
}

function setup() {
  createCanvas(displayWidth-20,displayHeight-20);
  cinderella=createSprite(400,displayHeight-400,10,10);
  cinderella.addImage("cinderella",cinderellaImg)
  cinderella.scale=0.5

  database=firebase.database()
  




 
}

function draw() {
 background(backgroundImg)
 camera.position.x=cinderella.x
 camera.position.y=cinderella.y
  
    
    
  

  
 

  drawSprites();
 
  
}


function keyPressed(){
  if(keyCode===UP_ARROW){
    cinderella.y=cinderella.y-15
    
  }
  if(keyCode===DOWN_ARROW){
    cinderella.y=cinderella.y+15
    
  }
  if(keyCode===LEFT_ARROW){
    cinderella.x=cinderella.x-15
    
  }
  if(keyCode===RIGHT_ARROW){
    cinderella.x=cinderella.x+15
    
  }
}

var rabbit , rabbitImg;
var backgroundImg , backgroundSprite;




function preload(){
   backgroundImg = loadImage("background.png");
   rabbitImg = loadImage("rabbit.png");

  
 
}





function setup() {
  createCanvas(displayWidth,displayHeight);
  backgroundSprite = createSprite(displayWidth/2-10,displayHeight/2-40, 50, 50);
  backgroundSprite.addImage(backgroundImg);
  backgroundSprite.scale = 1.1;

  rabbit = createSprite(550,370);
  rabbit.scale =0.5;
  rabbit.addImage(rabbitImg);



  
  
}


function draw(){
  background(0); 


  edges= createEdgeSprites();
  rabbit.collide(edges);

if(keyDown("Right")) {
    rabbit.x = rabbit.x+5;
  }

if(keyDown("Left")) {
   rabbit.x = rabbit.x-5;
}
if(keyDown("UP")) {
  rabbit.y = rabbit.y-5;
}

if(keyDown("DOWN")) {
 rabbit.y = rabbit.y+5;
}


  
 drawSprites();
 


}
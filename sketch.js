var movingrect, fixedrect




function setup() {
  createCanvas(800,400);  
  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="red"

  fixedrect=createSprite(100, 250, 100, 250);
  fixedrect.shapeColor="cyan"
  


}

function draw() {
  background(255,255,255);  
 movingrect.x=mouseX 
 movingrect.y=mouseY
 
 if (movingrect.x-fixedrect.x <= movingrect.width/2 + fixedrect.width/2 &&
  fixedrect.x-movingrect.x <= movingrect.width/2 + fixedrect.width/2 &&
  movingrect.y-fixedrect.y <= movingrect.height/2 + fixedrect.height/2 &&
  fixedrect.y-movingrect.y <= movingrect.height/2 + fixedrect.height/2 
  ) {
 movingrect.shapeColor="white"    
 fixedrect.shapeColor="white"
 }
 else{
movingrect.shapeColor="red"
fixedrect.shapeColor="cyan"

 }


  drawSprites();
}






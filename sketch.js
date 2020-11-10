var fRectangle, mRectangle;

function setup() {
  createCanvas(800,400);
  fRectangle = createSprite(400, 200, 50, 50);
  fRectangle.shapeColor = "yellow";
  fRectangle.debug = true;

  mRectangle = createSprite(300, 200, 50, 50);
  mRectangle.shapeColor = "yellow";
  mRectangle.debug = true;
}

function draw() {
  background(0);  
 
 mRectangle.x = mouseX;
 mRectangle.y = mouseY;

 if(mRectangle.x - fRectangle.x < fRectangle.width/2 + mRectangle.width/2 &&
  fRectangle.x - mRectangle.x < fRectangle.width/2 + mRectangle.width/2 &&
  fRectangle.y - mRectangle.y < fRectangle.height/2 + mRectangle.height/2 &&
  mRectangle.y - fRectangle.y < mRectangle.height/2 + fRectangle.height/2){
   mRectangle.shapeColor = "cyan";
   fRectangle.shapeColor = "pink";
 }
 else {
   mRectangle.shapeColor = "yellow";
   fRectangle.shapeColor = "yellow";
 }

  drawSprites();
}
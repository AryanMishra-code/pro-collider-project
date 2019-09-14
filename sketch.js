var movingRect, fixerRect;

function setup() {
  createCanvas(1350,675);
  movingRect = createSprite(200, 100, 200, 20);
  movingRect.shapeColor = "yellow";
  fixerRect = createSprite(650, 337.5, 200, 20);
  fixerRect.shapeColor = "red";

}
function draw() {
  background(21,0,255);  
  drawSprites();
  movingRect.x=World.mouseX,
  movingRect.y=World.mouseY;
  movingRect.setCollider("circle", 0, 0, 75,);
  fixerRect.setCollider("circle", 0, 0, 75,);


 if (movingRect.isTouching (fixerRect)) {
    fixerRect.shapeColor="turquoise";
    movingRect.shapeColor="light green";
    
  }
  else {
  fixerRect.shapeColor="red";
  movingRect.shapeColor="yellow";  
  
}
}
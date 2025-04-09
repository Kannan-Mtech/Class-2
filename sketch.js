var box;

function setup() {
  createCanvas(1350,635);
  box = createSprite(500,500,50,50);

}

function draw() 
{
   background("cyan");

  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x +5;
    box.shapeColor = color("red");
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x -5;
    box.shapeColor = color("blue"); 
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
    box.shapeColor = color("green");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
    box.shapeColor = color("black");
  }

  drawSprites();
}





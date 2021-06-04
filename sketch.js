var bg;







function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  bg.loadImage('snow1.jpg');
}

function draw() {
  background('bg');  
  drawSprites();
}
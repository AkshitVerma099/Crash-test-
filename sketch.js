var car1, car2, car3, car4

function setup() {
  createCanvas(1500,800);
  car1 = createSprite(100, 200, 50, 80);
  car1.shapeColor = "green"
  car2 = createSprite(100,300,50,50)
  car2.shapeColor = "red"
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
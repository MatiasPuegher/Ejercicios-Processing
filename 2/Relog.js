let angle = 0;
let radius = 100;
let centerX, centerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  centerX = width / 2;
  centerY = height / 2;
  frameRate(50);
}

function draw() {
  background(200);
  
  let x = centerX + cos(angle) * radius;
  let y = centerY + sin(angle) * radius;
  
  line(centerX, centerY, x, y);
  
  angle += 0.01;
}

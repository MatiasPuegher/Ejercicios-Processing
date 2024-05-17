let img;
let x = 100;
let y = 100;

function preload() {
  img = loadImage('i (2).jpg');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(img, x, y, 50, 50);
}

function keyPressed() {
  if (key === 'a') {
    x -= 5;
  } else if (key === 'd') {
    x += 5;
  } else if (key === 'w') {
    y -= 5;
  } else if (key === 's') {
    y += 5;
  }
}

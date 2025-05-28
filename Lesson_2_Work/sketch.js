let bee;

function setup() {
  createCanvas(600, 400);
  background(255);
  bee = createVector(width / 2, height / 2);
  noStroke();
}

function draw() {
  fill(138, 214, 255);
  rect(0, 0, width, height);

  drawFlower(width / 2, height / 2 + 50);

  bee.x += random(-2, 2);
  bee.y += random(-2, 2);

  drawBee(bee.x, bee.y);
}


// ref from https://editor.p5js.org/son/sketches/SkJJxG2Cm
function drawFlower(x, y) {
  push();
  translate(x, y);
  fill(255, 100, 150);
  for (let i = 0; i < 10; i++) {
    ellipse(0, 40, 200, 50);
    rotate(PI / 5);
  }
  fill(255, 200, 0);
  ellipse(0, 0, 60);
  pop();
}

function drawBee(x, y) {
  push();
  translate(x, y);
  fill(255, 204, 0);
  ellipse(0, 0, 30, 20);
  fill(0);
  rect(-10, -6, 5, 12);
  rect(-2, -6, 5, 12);
  rect(6, -6, 5, 12);
  fill(255, 255, 255, 180);
  ellipse(-8, -12, 15, 8);
  ellipse(8, -12, 15, 8);
  pop();
}

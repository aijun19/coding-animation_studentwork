//guy walking

let angle = 0;
let xpos = 0;

function setup() {
  createCanvas(800, 400);
  strokeWeight(6);
  noFill();
}

function draw() {
  background(0);

  let x = xpos;
  let y = height / 2 + 50;

  let armswing = cos(angle) * 30;
  let legswing = sin(angle) * 30;

  stroke(255, 220, 0);
  ellipse(x, y - 100, 50);

  stroke(100, 200, 255);
  line(x, y - 75, x, y);

  stroke(255, 100, 150);
  line(x, y - 50, x - 30 + armswing, y - 50);
  line(x, y - 50, x + 30 - armswing, y - 20);

  stroke(100, 255, 150);
  line(x, y, x - 20 + legswing, y + 60);
  line(x, y, x + 20 - legswing, y + 60);

  angle += 0.1;
  xpos += 2;

  if (xpos > width + 50) {
    xpos = -50;
  }
}

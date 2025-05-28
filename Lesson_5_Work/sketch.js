let mass = 1;
let k = 0.2;
let damping = 0.85;

let anchorX, anchorY;
let posX, posY;
let velocityX = 0;
let velocityY = 0;
let dragging = false;

function setup() {
  createCanvas(600, 400);
  anchorX = width / 2;
  anchorY = height - 150;
  posX = anchorX;
  posY = anchorY;
}

function draw() {
  background(255);

  fill(101, 67, 33);
  noStroke();
  rect(anchorX - 25, anchorY, 15, 150);
  rect(anchorX + 10, anchorY, 15, 150);

  if (!dragging) {
    let from_anchorX = posX - anchorX;
    let from_anchorY = posY - anchorY;

    let forceX = -k * from_anchorX;
    let forceY = -k * from_anchorY;

    let accelerationX = forceX / mass;
    let accelerationY = forceY / mass;

    velocityX += accelerationX;
    velocityY += accelerationY;

    velocityX *= damping;
    velocityY *= damping;

    posX += velocityX;
    posY += velocityY;
  } else {
    velocityX = 0;
    velocityY = 0;
  }

  let maxStretch = 150;
  let from_anchorX = posX - anchorX;
  let from_anchorY = posY - anchorY;
  let distFromAnchor = sqrt(from_anchorX * from_anchorX + from_anchorY * from_anchorY);

  if (distFromAnchor > maxStretch) {
    let angle = atan2(from_anchorY, from_anchorX);
    posX = anchorX + cos(angle) * maxStretch;
    posY = anchorY + sin(angle) * maxStretch;
  }

  stroke(0);
  strokeWeight(4);
  line(anchorX - 25, anchorY, posX, posY);
  line(anchorX + 25, anchorY, posX, posY);

  noStroke();
  fill(255, 0, 0);
  ellipse(posX, posY, 40, 40);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, posX, posY);
  if (d < 20) dragging = true;
}

function mouseDragged() {
  if (dragging) {
    posX = mouseX;
    posY = mouseY;
  }
}

function mouseReleased() {
  dragging = false;
}

let y_off = 0;

function setup() {
  createCanvas(600, 400);
  frameRate(60);
  noStroke();
  fill(100, 150, 255, 180);
}

function draw() {
  background(20, 40, 70);

  //  white moon
  fill(255);
  ellipse(width - 100, 100, 60);

  beginShape();

  let xoff = 0;

  for (let x = 0; x <= width; x += 3) {
    let n = fbm(xoff, y_off);
    let y = map(n, 0, 1, height - 120, height - 50);
    vertex(x, y);
    xoff += 0.005;
  }

  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  y_off += 0.001;
}

function fbm(x, y) {
  let amp = 1;
  let total = 0;
  let freq = 1;
  let max_val = 0;
  let octaves = 3;

  for (let i = 0; i < octaves; i++) {
    total += noise(x * freq, y * freq) * amp;
    max_val += amp;
    amp *= 0.5;
    freq *= 2;
  }
  return total / max_val;
}

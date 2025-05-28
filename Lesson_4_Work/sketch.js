let y_off = 0;

function setup() {
  createCanvas(600, 400);
  noStroke();
  frameRate(30);
}

function draw() {
  background(135, 206, 235);

  fill(255, 204, 0);
  ellipse(width - 100, 100, 80);

  fill(34, 139, 34);

  beginShape();

  let x_off = 0;

  for (let x = 0; x <= width; x += 3) {
    let n = fbm(x_off, y_off);
    let y = map(n, 0, 1, height / 4, height * 0.85);
    vertex(x, y);
    x_off += 0.02;
  }

  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  y_off += 0.008;
}

function fbm(x, y) {
  let total = 0;
  let amp = 1;
  let freq = 1;
  let max_val = 0;
  let octave = 3;

  for (let i = 0; i < octave; i++) {
    total += noise(x * freq, y * freq) * amp;
    max_val += amp;
    amp *= 0.5;
    freq *= 2.5;
  }

  return total / max_val;
}

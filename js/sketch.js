let cn;

let inc = 0.1;
let scl = 10;
let cols, rows;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  cn.position(x);
}

function windowResized() {
  centerCanvas();
}

function setup() {
  cn = createCanvas(900, 500);
  centerCanvas();
  cn.parent('p5');

  cols = floor(width / scl);
  rows = floor(height / scl);
}

function draw() {
  //background('#151515');

  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff, yoff) * 255;
      xoff += inc;
      fill(r);
      rect(x * scl, y * scl, scl, scl);
    }
    yoff += inc;
  }
}


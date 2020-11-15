let cn;

let inc = 0.1;
let scl = 10;
let cols, rows;

let colors = [];

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  cn.position(x);
}

function windowResized() {
  centerCanvas();
}

function make2Darray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function setup() {
  cn = createCanvas(900, 500);
  centerCanvas();
  cn.parent('p5');

  colorMode(HSB);

  cols = floor(width / scl);
  rows = floor(height / scl);

  colors = make2Darray(cols, rows);

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      colors[x][y] = color(random(255), 125, 255);
    }
  }
  frameRate(1);
}

function draw() {
  background('#151515');
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      fill(colors[x][y]);
      stroke(180);
      rect(x * scl, y * scl, scl, scl);
      colors[x][y] = colorChange(x, y);
    }
  }
}

function colorChange(x, y) {
  let colorTop, colorBottom, colorLeft, colorRight;
  let returnColor, colorSet = 0;
  let temp;

  if (y < rows-1) {
    colorTop = hue(colors[x][y + 1]);
    colorSet += colorTop;
  }
  if (y > 0) {
    colorBottom = hue(colors[x][y - 1]);
    colorSet += colorBottom;
  }
  if (x > 0) {
    colorLeft = hue(colors[x - 1][y]);
    colorSet += colorLeft;
  }
  if (x < cols-1) {
    colorRight = hue(colors[x + 1][y]);
    colorSet += colorRight;
  }

  colorSet *= noise(frameCount);
  console.log(colorSet);

  returnColor = color(colorSet, 100, 255);

  return returnColor;
}

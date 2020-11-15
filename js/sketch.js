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

  cols = floor(width / scl);
  rows = floor(height / scl);

  colors = make2Darray(cols, rows);
}

function draw() {
  //background('#151515');
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      colors[x][y] = random(255);
      fill(colors[x][y]);
      rect(x * scl, y * scl, scl, scl);
    }
  }
}


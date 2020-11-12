let cn;

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
}

function draw() {
  background('#151515');
}


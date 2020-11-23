// let cn;

// let inc = 0.1;
// let scl = 10;
// let cols, rows;

// let block = [];

// function centerCanvas() {
//   var x = (windowWidth - width) / 2;
//   cn.position(x);
// }

// function windowResized() {
//   centerCanvas();
// }

// function make2Darray(cols, rows) {
//   let arr = new Array(cols);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(rows);
//   }
//   return arr;
// }

// function setup() {
//   cn = createCanvas(900, 500);
//   centerCanvas();
//   cn.parent('p5');

//   colorMode(HSB);
//   frameRate(1);

//   cols = floor(width / scl);
//   rows = floor(height / scl);

//   block = make2Darray(cols, rows);

//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       block[x][y] = new Block();
//     }
//   }
// }

// function draw() {
//   background('#151515');
//   for (let y = 0; y < rows; y++) {
//     for (let x = 0; x < cols; x++) {
//       block[x][y].update(x, y);
//       block[x][y].display(x, y);
//     }
//   }
// }

// class Block {
//   construct() {
//     this.fillColor = color(random(255), 125, 255);
//   }

//   update(x, y) {
//     this.fillColor = this.colorChange(x, y);
//   }

//   display(x, y) {
//     fill(this.fillColor);
//     stroke(180);
//     rect(x * scl, y * scl, scl, scl);
//   }
  
//   colorChange(x, y) {
//     // let colorTop, colorBottom, colorLeft, colorRight;
//     // let returnColor, colorSet = 0;

//     this.colorSet = 0;
//     this.tempY = y * scl;
//     this.tempX = x * scl;

//     if (y < rows-1) {
//       this.c = get(this.tempX, this.tempY+scl+5);
//       this.colorTop = hue(this.c);
//       this.colorSet += this.colorTop;
//     }
//     if (y > 0) {
//       this.c = get(this.tempX, this.tempY-5);
//       this.colorBottom = hue(this.c);
//       this.colorSet += this.colorBottom;
//     }
//     if (x > 0) {
//       this.c = get(this.tempX-5, this.tempY);
//       this.colorLeft = hue(this.c);
//       this.colorSet += this.colorLeft;
//     }
//     if (x < cols-1) {
//       this.c = get(this.tempX+scl+5, this.tempY);
//       this.colorRight = hue(this.c);
//       this.colorSet += this.colorRight;
//     }

//     this.colorSet *= noise(frameCount);

//     this.returnColor = color(this.colorSet, 100, 255);

//     return this.returnColor;
//   }
// }

let img;

function preload() {
  img = loadImage('image/homepage.png');
}

function setup() {
  createCanvas(1920, img.height);
  image(img, 0, 0);
}

function draw() {
  image(img, 0, 0);
}

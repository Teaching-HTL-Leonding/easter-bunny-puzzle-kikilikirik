import p5 from 'p5';

let bunnyImage: p5.Image;

const p = new p5((sketch) => {

  sketch.setup = setup;
  sketch.preload = preload;
  sketch.draw = draw;
  sketch.bunnydraw = bunnydraw;
});

function preload() {

  bunnyImage = p.loadImage('assets/bunny.png');
}

function setup() {

  p.createCanvas(500, 500);
  p.background('red');
}

function draw() {

  p.background('white');

  p.image(bunnyImage, 0, 0, 500, 500, 150, 125, 200, 200);
  bunnydraw();
}

function bunnydraw() {

  p.stroke('white');
  p.noFill();
  p.strokeWeight(2);

  for (let y = 0; y < 500; y += 100) {
    for (let i = 0; i < 500; i += 100) {
      p.image(bunnyImage, i, y, 100, 100, i, y, 100, 100);
      p.rect(i, y, 100, 100);
    }
  }
}

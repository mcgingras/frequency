var mic;
var amp;
var button;

var volhistory = [];


function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();

  fft = new p5.FFT(0.8,16);
  fft.setInput(mic);
}

function draw() {
  background(0);
  var vol = mic.getLevel();
  volhistory.push(vol);
  stroke(255);

  var bands = fft.analyze();
  var max = Math.max.apply(null, bands);
  fill(max/2);



  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 1, 50, 300);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }

}

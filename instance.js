var mic1 = function(p) {

    var mic;
    var amp;
    var button;

    var volhistory = [];


    p.setup = function() {
      p.createCanvas(500,400);
      mic = new p5.AudioIn();
      mic.start();

      fft = new p5.FFT(0.8,16);
      fft.setInput(mic);
    }

    p.draw = function() {
      p.background(0);
      var vol = mic.getLevel();
      volhistory.push(vol);
      p.stroke(255,255,255,200);

      var bands = fft.analyze();
      p.fill(bands[15], bands[14], bands[13],90);



      p.translate(250, 200);
      p.beginShape();
      for (var i = 0; i < 360; i++) {
        var r = p.map(volhistory[i], 0, 1, 50, 300);
        // var x = r * p.cos(3.14 * (i/180));
        // var y = r * p.sin(3.14 * (i/180));

        // wild mode
        var x = r * p.cos(i);
        var y = r * p.sin(i);

        p.vertex(x, y);
      }
      p.endShape();

      if (volhistory.length > 40) {
        volhistory.splice(0, 1);
      }

    }


}

var mic2 = function(p) {

    var mic;
    var amp;
    var button;

    var volhistory = [];


    p.setup = function() {
      p.createCanvas(500,400);
      mic = new p5.AudioIn();
      mic.start();

      fft = new p5.FFT(0.8,16);
      fft.setInput(mic);
    }

    p.draw = function() {
      p.background(0);
      var vol = mic.getLevel();
      volhistory.push(vol);
      p.stroke(255,255,255,200);

      var bands = fft.analyze();
      p.fill(bands[12], bands[2], bands[3],90);



      p.translate(250, 200);
      p.beginShape();
      for (var i = 0; i < 360; i++) {
        var r = p.map(volhistory[i], 0, 1, 50, 300);
        // var x = r * p.cos(3.14 * (i/180));
        // var y = r * p.sin(3.14 * (i/180));

        // wild mode
        var x = r * p.cos(i);
        var y = r * p.sin(i);

        p.vertex(x, y);
      }
      p.endShape();

      if (volhistory.length > 40) {
        volhistory.splice(0, 1);
      }

    }


}

var mic3 = function(p) {

    var mic;
    var amp;
    var button;

    var volhistory = [];


    p.setup = function() {
      p.createCanvas(500,400);
      mic = new p5.AudioIn();
      mic.start();

      fft = new p5.FFT(0.8,16);
      fft.setInput(mic);
    }

    p.draw = function() {
      p.background(0);
      var vol = mic.getLevel();
      volhistory.push(vol);
      p.stroke(255,255,255,200);

      var bands = fft.analyze();
      p.fill(bands[0], bands[10], bands[8],90);



      p.translate(250, 200);
      p.beginShape();
      for (var i = 0; i < 360; i++) {
        var r = p.map(volhistory[i], 0, 1, 50, 300);
        // var x = r * p.cos(3.14 * (i/180));
        // var y = r * p.sin(3.14 * (i/180));

        // wild mode
        var x = r * p.cos(i);
        var y = r * p.sin(i);

        p.vertex(x, y);
      }
      p.endShape();

      if (volhistory.length > 40) {
        volhistory.splice(0, 1);
      }

    }


}

var mic4 = function(p) {

    var mic;
    var amp;
    var button;

    var volhistory = [];


    p.setup = function() {
      p.createCanvas(500,400);
      mic = new p5.AudioIn();
      mic.start();

      fft = new p5.FFT(0.8,16);
      fft.setInput(mic);
    }

    p.draw = function() {
      p.background(0);
      var vol = mic.getLevel();
      volhistory.push(vol);
      p.stroke(255,255,255,200);

      var bands = fft.analyze();
      p.fill(bands[1], bands[4], bands[5],90);



      p.translate(250, 200);
      p.beginShape();
      for (var i = 0; i < 360; i++) {
        var r = p.map(volhistory[i], 0, 1, 50, 300);
        // var x = r * p.cos(3.14 * (i/180));
        // var y = r * p.sin(3.14 * (i/180));

        // wild mode
        var x = r * p.cos(i);
        var y = r * p.sin(i);

        p.vertex(x, y);
      }
      p.endShape();

      if (volhistory.length > 600) {
        volhistory.splice(0, 1);
      }

    }


}

// Tie each to a specific
new p5(mic1,'c1');
new p5(mic2,'c2');
new p5(mic3,'c3');
new p5(mic4,'c4');

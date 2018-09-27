import * as p5 from 'p5';

let s = (p5) => {

  let x = 0;
  let y = 0;
  let space = 40;

  p5.setup = () => {
    p5.createCanvas(window.innerWidth,window.innerHeight);
    p5.background(0);	

  }
  p5.draw = () => {

    p5.stroke(255);
    if (p5.random(1) < 0.8) {
      p5.line(x*space + 0, y*space + 0, x*space + space, y*space + space);
    } else {
      p5.line(x*space + space, y*space + 0, x*space + 0, y*space + space);
    }
    
    x++;
    if (x * space >= window.innerWidth) {
      
      x = 0;
      y++;
      if (y * space >= window.innerHeight) {
        p5.background(p5.random(0, 255), p5.random(0, 255), p5.random(0, 255));
        y = 0;
      }
    }
    
  }
}

const P5 = new p5(s);
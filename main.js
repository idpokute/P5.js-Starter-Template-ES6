import * as p5 from 'p5';

class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  update(sk) {
    this.x = sk.random(this.x-5, this.x+5)
    this.y = sk.random(this.y-5, this.y+5)
  }
  draw(sk) {
    sk.noStroke();
    sk.fill(255,10);
    sk.ellipse(this.x , this.y, this.r);
  }
}

// sketch
let s = (sk) => {

  let x = 0;
  let y = 0;
  let space = 40;

  let balls = [];

  const SCREEN_WIDTH = 640;
  const SCREEN_HEIGHT = 480;
  
  sk.setup = () => {
    sk.createCanvas(SCREEN_WIDTH, SCREEN_HEIGHT);
    sk.rectMode(sk.CENTER);
    sk.background(0);	

    let sx = 320;
    let sy = 240;
    
    for (let i=0; i<1000; i++) {
      balls.push(new Ball(sk.random(0, SCREEN_WIDTH), sk.random(0, SCREEN_HEIGHT), sk.random(50, 100), sk.color(255,0,0)));
    }
  }
  sk.draw = () => {
    // This is for Mouse cursor
    let colour = sk.map(sk.mouseX, 0, SCREEN_WIDTH, 0, 255)

    sk.background( colour );
    sk.fill(255 - colour);
    sk.ellipse(sk.mouseX, 300, 32, 32);

    // Draw balls
    for (let ball of balls) {
      ball.update(sk);
      ball.draw(sk);
    }
  }
}

const P5 = new p5(s);
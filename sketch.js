var s = 'gay';
var xx,yy ;
var radius = 100;
function setup() {
  createCanvas(displayWidth,displayHeight);
  background(0);
}


function draw() {
  //background(200);
  translate(width/2,height/2);
  noStroke();
  fill(0,40);
  rect(-width/2,-height/2,displayWidth,displayHeight);
  textSize(32);
  fill(0,200,0);
  xx= radius * cos(radians(frameCount%360));
  yy= radius * sin(radians(frameCount%360));
  text(s,xx,yy);
  text(s,-xx,-yy);
//   text(s,-xx,yy);
//   text(s,xx,-yy);
  //ellipse(0,0,10,50);
  
}

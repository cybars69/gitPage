var s = 'gay';
var xx,yy ;
var radius = 100;
function setup() {
  createCanvas(displayWidth,displayHeight);
  background(0);
}


function draw() {
  if(frameCount%500==0){
    background(0);
  }
  translate(width/2,height/2);
  noStroke();
  fill(0,40);
  rect(-width/2,-height/2,displayWidth,displayHeight);
  textSize(32);
  fill(0,200,0);
  xx1= radius * cos(radians(frameCount%360));
  yy1= radius * sin(radians(frameCount%360));
  xx2= radius * cos(radians(frameCount%360)+(PI/2));
  yy2= radius * sin(radians(frameCount%360)+(PI/2));
  text(s,xx1,yy1);
  text(s,-xx1,-yy1);
  text(s,xx2,yy2);
  text(s,-xx2,-yy2);
//   text(s,-xx,yy);
//   text(s,xx,-yy);
  //ellipse(0,0,10,50);
  
}

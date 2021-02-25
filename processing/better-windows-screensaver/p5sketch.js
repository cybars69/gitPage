var xOff = 0;
var yOff = 40;
var inc = -1;
var radius = 50;
var capFrame = 0;
var size;

function setup() {
  size = Math.min(displayWidth,displayHeight)
  createCanvas(size,size);
  background(0);
}


function draw() {
  //background(0);
  if(mouseIsPressed && 
    mouseX <= size && mouseX >=0 &&
    mouseY <= size && mouseY >=0 &&
    frameCount - capFrame > 120){
    var imgName = "myCanvas_" + Math.floor(1000 + Math.random() * 9000) ;
    saveCanvas(imgName, 'png');
    mouseIsPressed=0;
    capFrame = frameCount;
  }
  varx = map(noise(xOff),0,1,0 ,width);
  vary = map(noise(yOff),0,1,0 ,height);
  xOff += 0.008;
  yOff += 0.008;
  strokeWeight(1);
  // fill(random(50,200),random(50,200),random(50,200));
  fill(random(80,200),random(80,200),random(80,200))

  ellipse(varx,vary,random(radius/1.1,radius),random(radius/1.1,radius));
  if(frameCount%3==0){
    radius += inc;
  }
  if(radius>60 || radius<10){
    inc *=-1;
  }
  
}

let paintR = 0
let paintB = 0
let paintG = 0

let fox;
let easel;


function preload(){
  fox = loadImage("Images/PainterFox.png");
  easel = loadImage("Images/PixelEasel.png");
  //Gif inputs
  room = createImg("Images/R.gif")
}

function setup() {
  //put set up code here to run once
  createCanvas(windowWidth,windowHeight);

  background(random(230), random(204), random(165));
  room.position(800,1200)
//change rect x&y to center
  rectMode(CENTER)
  imageMode(CENTER)
  stroke(168, 175, 186)
  strokeWeight(7)
  fill(255,255,255)
  rect(window.innerWidth,window.innerHeight)
  //noCursor
}


function draw() {
  // put drawing code here to run in a loop


//Styles for ellipse
fill(222,142,142);
stroke(random(250),random(255),500)
strokeWeight(5)


//apartment styles
stroke((255),(255),(255))
rect(10,30,1000,1500)

//color controls


//painting controls
if (mouseIsPressed){
  strokeWeight(7)
  stroke(paintR,paintB,paintG)
  point(mouseX,mouseY)
}



//Styles for lines

//Styles for Images

image(easel,300,470,250,450);
image(fox,150,530)
//Gif styles
}
//color picker
function keyPressed(){
//red
  if(key == '1'){
    paintR = 222
    paintB = 75
    paintG = 75
  }
  //orange
  if(key == '2'){
    paintR = 222
    paintB = 151
    paintG = 75
  }
  //yellow
  if(key == '3'){
    paintR = 239
    paintB = 242
    paintG = 73
  }
  //light green
  if(key == '4'){
    paintR = 169
    paintB = 242
    paintG = 73
  }
  //green
  if(key == '5'){
    paintR = 50
    paintB = 117
    paintG = 58
  }
  //light blue
  if(key == '6'){
    paintR = 56
    paintB = 171
    paintG = 171
  }
  //blue
  if(key == '7'){
    paintR = 55
    paintB = 86
    paintG = 161
  }
  //purple
  if(key == '8'){
    paintR = 168
    paintB = 97
    paintG = 207
  }
  //pink
  if(key == '9'){
    paintR = 219
    paintB = 121
    paintG = 195
  }
  //white
  if(key == '0'){
    paintR = 255
    paintB = 255
    paintG = 255
  }
  //black
  if(key == '`'){
    paintR = 0
    paintB = 0
    paintG = 0
  }
}



function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

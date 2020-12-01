let paintx = []
let painty = []
let paintR = 0
let paintB = 0
let paintG = 0


let brushsize = 7
//Images
let fox;
let easel;
let bookshelf;
let windowsGIF;
let plant;
//arrays
let randname;
let dumnum = [12,38,46,59,63,70]
let words = ['SALE','Sold','No Sale','Broke','Hungery']

function preload(){
  fox = loadImage("Images/PainterFox.png");
  easel = loadImage("Images/PixelEasel.png");
  bookshelf = loadImage("Images/bookshelf.png")
  plant = loadImage("Images/Plant.png")
  windowsGIF = createImg("Images/windows.gif")
  //Gif inputs

}

function setup() {
  //put set up code here to run once
  createCanvas(windowWidth,windowHeight);
  background(random(230), random(204), random(165));
//change rect x&y to center
  rectMode(CENTER)
  imageMode(CENTER)
  stroke(168, 175, 186)
  strokeWeight(7)
  fill(255,255,255)
  rect(window.innerWidth,window.innerHeight);
  // noCursor()
  randnames=int(random(words.length));

}
print(randnames)

function draw() {
//   put drawing code here to run in a loop
// for(i=0; i < dumnum.length; i++){
//   print(dumnum[i]);
//   fill(random(255),random(255),random(255));
//   rect(random(windowWidth),random(windowHeight),dumnum[i],dumnum[i])
// }
text(words[randnames],200,300)
//Styles for ellipse
fill(222,142,142);
stroke(random(250),random(255),500)
strokeWeight(5)


//apartment styles
stroke((255),(255),(255))
rect(10,30,1000,1600)

//color controls


//painting controls
if (mouseIsPressed){
  strokeWeight(brushsize)
  stroke(paintR,paintB,paintG)
  line(mouseX,mouseY,pmouseX,pmouseY)
}

//Images
windowsGIF.position(60,150,300,300)
image(bookshelf,200,500)
image(easel,300,570,250,450);
image(fox,150,630)
image(plant,240,680)


//Gif styles
text(words[randnames],100,50)
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
  //clear sketch
  if(key=='b' || key=='B'){
    background(random(230), random(204), random(165))
  }
  //strokeWeight
  if(key==']'){
    brushsize = brushsize + 1
  }

  if(key=='['){
    brushsize = brushsize - 1
  }

  //saveSketch
  if(key=='s' || key=='S'){
    save('drawing.png')
  }
}



function windowResized(){
  resizeCanvas(windowWidth,windowHeight)
}

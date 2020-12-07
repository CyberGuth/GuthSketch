let paintx = []
let painty = []
let paintR = 0
let paintB = 0
let paintG = 0


let brushsize = 7
//Images
let fox;
let easel;
let pigman;
let windowsGIF;
let plant;
//arrays
let randname;
let dumnum = [12,38,46,59,63,70]
let words = ['SALE','Sold','No Sale','Broke','Hungry']


//NEW VARIABLES------------------------------------------------------------------/

//canvas variable
let canvas;

//text variables
let artStatus;
let instructions1;
let instructions2;
let instructions3;

//button to change scene
let changeSceneButton;

//second scene variables
let sellSceneBoolean = false;
let bookshelfAnimX = 0;
let bookshelfSpeed = 2;

function preload(){
  //load and position your images here and
  //hide the ones you want to show in a later level.
  //the createImg function creates an html image,
  //so it's not drawn on the canvas.
  //images will be stacked on top of one another like layers,
  //so windowsGIF is the bottom layer and plant is top.
  windowsGIF = createImg("Images/windows.gif")
  windowsGIF.addClass('windows');
  windowsGIF.position(60,150);


  easel = createImg("Images/PixelEasel.png");
  easel.position(150, 250);
  //I added a class here to adjust the scale using css (see the index file for styles in the head)
  //you can do this with any of these html objects, like text
  easel.addClass("easel");

  fox = createImg("Images/PainterFox.png")
  fox.position(30,350);

  plant = createImg("Images/Plant.png");
  plant.position(-200, 400)
  plant.hide();

  pigman = createImg("Images/PigMan.png")
  pigman.position(0, 200);
  pigman.hide();
  pigman.addClass("pigman")


}

function setup() {
  //canvas is now only 600x600 and positioned to the left.
  //when you save an image, it will now only be this 600x600 drawing
  //and not the entire scene.
  canvas = createCanvas(600,600);
  canvas.position(windowWidth/2, 100);

  background(random(230), random(204), random(165));

  rectMode(CENTER)
  imageMode(CENTER)



  randnames=int(random(words.length));

  //creating the html paragraph (p tags).
  //you can easily style these using CSS in the index head
  //by styling the p tag.
  artStatus = createP(words[randnames]);
  artStatus.position(100,0);
  instructions1 = createP('~ - 0: change color');
  instructions1.position(100,40);
  instructions2 = createP('B: change background / clear');
  instructions2.position(100,70);
  instructions3 = createP('[ ]: change brush stroke weight');
  instructions3.position(100,100);

  //create the button to change scenes. you can style the button using CSS in the index head
  changeSceneButton = createButton('Finish Painting');
  changeSceneButton.position(450, 600);
  //this mouse pressed event will trigger the sell scene.
  //if you want a different event to trigger the function,
  //you can use a conditional statement to trigger.
  changeSceneButton.mousePressed(sellPainting);

}

//sell painting function triggers when the button is pressed
function sellPainting(){
  //flips boolean to true (see draw function below for description)
  //we need to do this because there's an animation in this function.
  sellSceneBoolean = true;

  //hiding and showing things
  changeSceneButton.hide();
  windowsGIF.hide();
  easel.hide();
  pigman.show();
  plant.show();

  //you can hide the text from the previous level, or update it with new text.
  //I just updated 1 of them here, this will update on the screen.
  instructions1.html("updated text");

  //animate the bookshelf image
  bookshelfAnimX = bookshelfAnimX + bookshelfSpeed;
  pigman.position(bookshelfAnimX, 400);

  //reset bookshelf image position when it goes off edge of screen
  if(bookshelfAnimX > windowWidth){
    bookshelfAnimX = 0;
  }

}


function draw() {

  //painting controls
  if (mouseIsPressed){

    strokeWeight(brushsize)
    stroke(paintR,paintB,paintG)
    line(mouseX,mouseY,pmouseX,pmouseY)
  }

  //check to see if the sell scene boolean is true. This is flipped to true
  //when sellPainting is called after pressing the button.
  //if it is true, call sellPainting() every frame so the animation position will update.
  //if you add more levels, you can flip this back to false once the new levels are triggered.
  if (sellSceneBoolean == true){
    sellPainting();
  }



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
  if(key == '`' || key =='~'){
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

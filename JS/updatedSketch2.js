let paintx = []
let painty = []
let paintR = 0
let paintB = 0
let paintG = 0



let brushsize = 7
//Images
let fox;
let deadfox
let tile;
let easel;
let pigman;
let foxhole;
let bed;
let bodega;
let street;
let nycItems;
let anteater;
//arrays
let randname;
let randprice;
let dumnum = [12,38,46,59,63,70]
let words = ['I want a beer.','Need food.','Its the poor artist that borrows','Ah nuts broke again.','Hungry','I really want a beer','art = food',]
let numbers = ['a couple bucks','ten thousand dollars','one thousand dollars','eight dollars','to much','one zillion billion','Banksy Shit','a whole bunch','wayyy to much','millions']
let day = 1


//NEW VARIABLES------------------------------------------------------------------/

//canvas variable
let canvas;

//text variables
let artStatus;
let artValue;
let instructions1;
let instructions2;
let instructions3;
let instructions4;
let instructions5;
let instructions6;
let instructions7;
let instructions8;
let instructions9;



//button to change scene
let changeSceneButton;

//second scene variables
let sellSceneBoolean = false;
let pigAnimX = 0;
let pigSpeed = 30

let antAnimX = 0;
let antSpeed = 4;



//hunger bar variables
let hungerBar;
let hungerBarValue = 250; //starting at 250px wide. Change to whatever you want.


function preload(){
  //load and position your images here and
  //hide the ones you want to show in a later level.
  //the createImg function creates an html image,
  //so it's not drawn on the canvas.
  //images will be stacked on top of one another like layers,
  //so windowsGIF is the bottom layer and plant is top.


  tile = createImg("Images/Tile.png")
  tile.addClass('tile')
  tile.position(0,520)

  foxhole = createImg("Images/Foxhole.png")
  foxhole.addClass("foxhole");
  foxhole.position(0,0);

  bed = createImg("Images/Bed.png")
  bed.addClass("bed")
  bed.position(600,560)

  easel = createImg("Images/PixelEasel.png");
  easel.position(240, 300);
  //I added a class here to adjust the scale using css (see the index file for styles in the head)
  //you can do this with any of these html objects, like text
  easel.addClass("easel");

  bodega = createImg("Images/Bodega.png");
  bodega.position(0,0)
  bodega.addClass("bodega");


  street = createImg("Images/Street.png");
  street.position(0,580)
  street.addClass("street");


  nycItems = createImg("Images/NYCitems.png");
  nycItems.position(350,150);
  nycItems.addClass("nycItems");

  fox = createImg("Images/PainterFox.png")
  fox.position(100,380);

  deadfox = createImg("Images/Deadfox.png")
  deadfox.position(400,280)
  deadfox.addClass("deadfox")
  deadfox.hide();


  pigman = createImg("Images/PigMan.png")
  pigman.position(0, 200);
  pigman.addClass("pigman")

  anteater = createImg("Images/anteater.gif")
  anteater.position(0,200)
  anteater.addClass("anteater")


      anteater.hide();
      pigman.hide();
      nycItems.hide();
      street.hide();
      bodega.hide();


}

function setup() {
  //canvas is now only 600x600 and positioned to the left.
  //when you save an image, it will now only be this 600x600 drawing
  //and not the entire scene.
  canvas = createCanvas(500,500);
  canvas.position(windowWidth/2 + 150, 10);

  background(random(230), random(204), random(165));

  rectMode(CENTER)
  imageMode(CENTER)



  randnames=int(random(words.length));
  randprice=int(random(numbers.length));

  //creating the html paragraph (p tags).
  //you can easily style these using CSS in the index head
  //by styling the p tag.
  artStatus = createP(words[randnames]);
  artStatus.position(10,-10);
  instructions1 = createP('~ - 0: Change Color');
  instructions1.position(10,10);
  instructions2 = createP('B: Change Background/Clear');
  instructions2.position(10,30);
  instructions3 = createP('[ ]: Stroke Weight');
  instructions3.position(10,50);
  instructions4 = createP('S: Save Painting')
  instructions4.position(10,70);
  instructions5 = createP(day)
  instructions5.position(630,50);
  instructions6 = createP('Click Mouse to Bark.')
  instructions6.position(680,50)
  instructions6.hide();
  instructions7 = createP('Bark When Buyers in View.')
  instructions7.position(640,12)
  instructions7.hide();
  instructions8 = createP('HUNGER')
  instructions8.position(50,650)
  instructions8.hide();
  instructions9 = createP('After Death Art Sold For:')
  instructions9.position(460,200);
  instructions9.hide();
  artValue = createP(numbers[randprice]);
  artValue.position(680,200);
  artValue.hide();

  //create the button to change scenes. you can style the button using CSS in the index head
  changeSceneButton = createButton('Finish Painting');
  changeSceneButton.position(630, 30);
  //this mouse pressed event will trigger the sell scene.
  //if you want a different event to trigger the function,
  //you can use a conditional statement to trigger.
  changeSceneButton.mousePressed(sellPainting);


  //create the hunger bar div and add a class of hungerBar.
  //the only style added with code is the posiiton and
  //width, other styles are added using CSS in the index.
  //Width changes with the hungerBarValue variable.
  hungerBar = createDiv('');
  hungerBar.addClass('hungerBar');
  hungerBar.position(50, 650);
  hungerBar.hide();
}

//sell painting function triggers when the button is pressed
function sellPainting(){
  day == day + 1
  //flips boolean to true (see draw function below for description)
  //we need to do this because there's an animation in this function.
  sellSceneBoolean = true;

  //hiding and showing things
  //show hunger bar and update its witdth with the hungerBarValue variable.
  //this variable is changed in the mouseReleased function below
  hungerBar.show();
  hungerBar.style('width', hungerBarValue+'px');

  changeSceneButton.hide();
  tile.hide();
  foxhole.hide();
  easel.hide();
  pigman.show();
  bodega.show();
  street.show();
  nycItems.show();
  fox.position(120,270)
  bed.hide();
  anteater.show();

  //you can hide the text from the previous level, or update it with new text.
  //I just updated 1 of them here, this will update on the screen.
  instructions1.hide();
  instructions2.hide();
  instructions3.hide();
  instructions4.hide();
  instructions5.hide();
  artStatus.hide();
  instructions6.show();
  instructions7.show();
  instructions8.show();
  //animate the bookshelf image
  pigAnimX = pigAnimX + pigSpeed;
  pigman.position(pigAnimX, 350);

  antAnimX = antAnimX + antSpeed;
  anteater.position(antAnimX, 100);

  //reset bookshelf image position when it goes off edge of screen
  if(pigAnimX > windowWidth){
    pigAnimX = 0;
  }
  if(antAnimX > windowWidth){
    antAnimX = 0;
  }
  //if hungerBarValue gets to O, do something
  if(hungerBarValue <= 0){
      day = day + 1
    //you you become famous or rich?
      sellSceneBoolean = false
      changeSceneButton.mousePressed(sellPainting);
      pigman.hide();
      bodega.hide();
      street.hide();
      nycItems.hide();
      anteater.hide();
      hungerBar.hide();
      changeSceneButton.show();
      tile.show();
      foxhole.show();
      easel.show();
      bed.show();
      fox.position(100,380)
      instructions5.html(day)
      instructions5.show();
      instructions1.show()
      instructions2.show()
      instructions3.show()
      instructions4.show()
      artStatus.show()
      instructions6.hide();
      instructions7.hide();
      instructions8.hide();



  }
  //if hungerBarValue gets to a certain value, do something
  if(hungerBarValue >= 500){
    //you die? maybe another scene function?
    //you would call that function here and then in that death function you would flip the sellSceneBoolean to false
    sellSceneBoolean = false
    pigman.hide();
    bodega.hide();
    street.hide();
    nycItems.hide();
    anteater.hide();
    hungerBar.hide();
    fox.hide();
    deadfox.show();
    instructions5.html('You Went Hungry.');
    instructions5.show();
    instructions6.hide();
    instructions7.hide();
    instructions8.hide();
    instructions9.show();
    artValue.show();

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

//mouseReleased triggers once where as mousePressed triggers multiple times
function mouseReleased(){
  let canvasLeft = windowWidth/2 + 150
  let canvasRight = windowWidth/2 + 650
  //make sure we're on the sell screen
  if (sellSceneBoolean == true){
    //check to see if the position of pigman is within the canvas.
    //The left edge of the canvas is at windowWidth/2 + 150, the right edge
    //is windowWidth/2 + 650 because the canvas is 500px wide and offset to the
    //right by 150px from center
    if(pigAnimX > canvasLeft && pigAnimX < canvasRight){
      if(antAnimX > canvasLeft && antAnimX < canvasRight){
        hungerBarValue = hungerBarValue - 100
      }else {
        hungerBarValue = hungerBarValue - 10
      }
      //decrease hunger bar by 10px
    }else{
      if(antAnimX > canvasLeft - 500 && antAnimX < canvasRight - 400){
      hungerBarValue = hungerBarValue - 10
    }else{
      hungerBarValue = hungerBarValue + 200
    }


}


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
    brushsize = brushsize + 10
  }

  if(key=='['){
    brushsize = brushsize - 10
  }

  //saveSketch
  if(key=='s' || key=='S'){
    save('drawing.png')
  }


}

//if you use this, your canvas will be erased when the user resizes the window
function windowResized(){
  //resizeCanvas(windowWidth,windowHeight)
}

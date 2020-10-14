let rectX = 250;
let rectY = 600;

function setup() {
  //put set up code here to run once
  createCanvas(windowWidth,windowHeight);

  background(random(230), random(204), random(165));
//change rect x&y to center
  rectMode(CENTER)
}


function draw() {
  // put drawing code here to run in a loop
//Styles for ellipse
fill(222,142,142);
stroke(random(250),random(255),500)
strokeWeight(10)
ellipse(800,500,50,50);
//Styles for point
stroke(random(255),random(255),random(255))
point(mouseX,mouseY)
//styles for the rectangle
fill(random(165),random(207),random(230))
rect(250,600,400,300)
//Styles for triangle
fill(165,207,230)
triangle(1200,50,1300,600,950,400)
ellipse(1200,50,50,50)

ellipse(1200,50,50,50)
point(1200,50)
//Styles for lines
stroke(125, 173, 135)
strokeWeight(20)
line(250,600,400,300)
line(150,500,300,200)
}

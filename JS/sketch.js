function setup() {
  //put set up code here to run once
  createCanvas(windowWidth,windowHeight);

  background(230, 204, 165);
//change rect x&y to center
  rectMode(CENTER)
}


function draw() {
  // put drawing code here to run in a loop
fill(222,142,142);
stroke(490,3550,500)
strokeWeight(10)
ellipse(mouseX,mouseY,50,50);

point(800,500)
//styles for the rectangle
fill(165,207,230)
rect(250,600,400,300)
//Styles for triangle
fill(165,207,230)

triangle(1200,50,1300,600,950,400)
ellipse(1200,50,50,50)
point(1200,50)

}

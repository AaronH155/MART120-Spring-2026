

var redColor = 123;
var greenColor = 39;
var blueColor = 21;

var movement = 1;
var movement1 = 1;
var movement2 = 1;
var movement3 = 1;
var movement4 = 1;
//right eye
var x = 250;
var y = 170;
//left eye
var diameter = 20;
var x1 = 150;
var y1 = 170;
var diameter1 = 20;
//nose
var x2 = 200;
var y2 = 230;
var x3 = 200;
var y3 = 210;
//text movement
var x4 =10;
var y4 = 340;
//text grow
var count = 0;
var size = 12;
var move = 1;

 // this function is called only once
function setup()
{

    createCanvas(400,600);
    movement=floor(random(10));
    movement1=floor(random(10));
    movement2=floor(random(10));
    movement3=floor(random(10));
    move=floor(random(10));
}
/* this function is called continuously
    while the sketch is open in the browser
*/
function draw()
{
    background(redColor,greenColor,blueColor);
    circle(x,y,diameter);
}

//title
function draw() {
  background(220);
  noStroke()
  textSize(12);
  text("x: " + mouseX + ", y: " + mouseY, 10, 20);
  
  fill(0, 0, 0)


  textSize(size)
  size += move;
  count ++;

  if (count >= 5) {
    textSize + move;
    count = 0;
  }

  if (size >= 17 || size <= 12) {
    move *= -1;
    
  }
  
  text("Aaron Heisel in art", 245, 43);

  


  
  fill(51, 58, 107);
  square(0, 300, 500)
  fill(199, 160, 113);
  triangle(141, 301, 195, 360, 240, 311);
  
  
  textSize(12);
  fill(255, 255, 255)
  text("Aaron Heisel", x4, y4);
  x4 = x4 + movement4;

  if (x4 < 0 || x4 > 600) {  
    movement4 *= -1; 
  
  }
      y4 = y4 + movement4;

  if (y4 < 0 || y4 > 600) {  
    movement4 *= -1; 
  
  }

  strokeWeight(0);
  stroke(212, 321, 123);
  fill(237, 218, 194);
  circle(200, 200, 250);

  
  strokeWeight(5);
  stroke(0, 0, 0);
  noFill();
  circle(250, 170, 70);
  
  strokeWeight(5);
  stroke(0, 0, 0);
  noFill();
  circle(150, 170, 70);
  
  line(187, 172, 215, 172);
  line(114, 174, 84, 160);
  line(286, 174, 321, 160);
  
  
  
  strokeWeight(0);
  stroke(212, 321, 123);
  fill(255, 255, 255);
  circle(150, 170, 50);
  
  strokeWeight(0);
  stroke(212, 321, 123);
  fill(255, 255, 255);
  circle(250, 170, 50);
  
  strokeWeight(0);
  stroke(212, 321, 123);
  fill(0, 0, 0);
  circle(x, y, diameter);
  x = x + movement;

  if (x < 228 || x > 270) {  
    movement *= -1; 
  
  }


  strokeWeight(0);
  stroke(212, 321, 123);
  fill(0, 0, 0);
  circle(x1, y1, diameter1);
  x1 = x1 + movement1;

  if (x1 < 126 || x1 > 176) {  
    movement1 *= -1; 
  
  }
  
//mouth
  ellipse(200,250,180,30,);
  
  fill(237, 218, 194);
  ellipse(200,240,180,30,);
  
//nose
  fill(240, 208, 170);
  ellipse(x2,y2,50,20,);
  ellipse(x3,y3,20,50,);
  
  y2 = y2 + movement2;

  if (y2 < 184 || y2 > 230) {  
    movement2 *= -1; 
  
  }
    y3 = y3 + movement3;

  if (y3 < 184 || y3 > 230) {  
    movement3 *= -1; 
  
  }
//hair

  fill(92, 68, 39);
  rotate(25)
  ellipse(120,115,150,30,);
  
  
  rotate(25)
  ellipse(120,145,200,30,);
  
   
  rotate(150)
  ellipse(32,280,30,200,);
  
  

}



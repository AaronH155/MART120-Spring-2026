function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke()
  textSize(12);
  text("x: " + mouseX + ", y: " + mouseY, 10, 20);
  
  strokeWeight(0);
  stroke(212, 321, 123);
  fill(255, 255, 255);
  circle(200, 250, 250);
  
  ellipse(120,130,60,180);
  ellipse(280,130,60,180);
  
  strokeWeight(0);
  stroke(212, 321, 123);
  fill(0, 0, 0);
  circle(120, 230, 20);
  circle(270, 230, 20);
  
  strokeWeight(5);
  stroke(0, 0, 0);
  line(170, 290, 220, 260);
  line(170, 260, 220, 290);
}
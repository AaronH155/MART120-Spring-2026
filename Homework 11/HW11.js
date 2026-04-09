var diameter = 50;
var movement = 1;
var x = 0;
var y = 0;

var r = 255;
var g = 255;
var b = 255;



function setup() {
createCanvas(400, 400);
}
function draw() {
    background(255, 100, 0);

    textSize(12);
    text("x: " + mouseX + ", y: " + mouseY, 300, 20);

    fill(255, 0, 0);
    square(100, 200, 100);

    fill(255, 0, 200);
    triangle(30, 75, 58, 20, 86, 75);

    fill(0, 255, 0);
    square(300, 300, 140);

    fill(r, g, b);
    circle(x, y, diameter);


    if (keyIsDown(83)) {
        {

            y = y + movement
            
        }

    }

    if (keyIsDown(68)) {
        {

            x = x + movement
            
        }

    }

        if (keyIsDown(65)) {
        {

            x = x - movement
            
        }

    }

    else if (keyIsDown(87)) {
        {

            y = y - movement
            
        }

    }


    if (x >= 300 && x <= 440 && y >= 300 && y <= 440) {
    background(0, 255, 0);
    text("You Win!", 245, 43);

}

}

function keyPressed() {
  console.log(keyPressed, ' ', keyCode);
}

function mousePressed() {
    fill(r, g, b);
    square(200, 200, 10);
    x = mouseX;
    y = mouseY;
}


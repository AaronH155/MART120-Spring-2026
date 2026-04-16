
var x = 0;
var y = 0;

var sqx = 0;
var sqy = 0;
var movement = 1;

var r = 255;
var g = 255;
var b = 255;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  player(x, y);
  obstacles();
  border();
  exittext();
  locater();
  wintext();
  squaremaker();
}

function squaremaker() {
fill(219, 112, 147);
square(sqx, sqy, 10);
}

function player() {
    fill(0, 255, 0);
    circle(x, y, 50);

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
      }
function mousePressed() {
    fill(r, g, b);
    
    sqx = mouseX;
    sqy = mouseY;
         }
  
      {
      function obstacles() {
    fill(255, 0, 0);
    square(100, 200, 100);

    fill(255, 0, 200);
    triangle(30, 75, 58, 20, 86, 75);

    fill(0, 255, 0);
    square(300, 300, 140);
      }
  }

  function border() {
    fill(0, 0, 0);
    rect(0, 0, 400, 10);
    rect(0, 0, 10, 400);
    rect(0, 390, 400, 10);
    rect(390, 0, 10, 400);
  }

  function exittext() {
    fill(0, 0, 0);
    textSize(20);
    text("EXIT", 330, 350);
  }

  function locater() {
  textSize(12);
    text("x: " + mouseX + ", y: " + mouseY, 300, 20);
  }

  function wintext() {
    if (x >= 300 && x <= 440 && y >= 300 && y <= 440) {
    background(0, 255, 0);
    text("You Win!", 245, 43);
}
  }






/*
  sqawk();


  hearts(100, 100);
  hearts(200, 200);
  hearts(300, 300);
}

function hehaw(x, y) {
    
    circle(x, y, 50);

}

function sqawk() {

    square(300, 300, 50);

}

function hearts(x, y) {
    noStroke();
    fill(255, 0, 0);

    circle(x - 10, y, 20);
    circle(x + 10, y, 20);

    triangle(x - 20, y, x + 20, y, x, y + 30);
}

*/

var x = 0;
var y = 0;

var sqx = 0;
var sqy = 0;
var movement = 1;

var r = 255;
var g = 255;
var b = 255;

var myNumbers = []; 
var MyX = [100, 300, 250, 330, 174]; 
var MyY = [200, 300, 125, 200, 30];
var MyFill = [[132, 12, 312], [50, 255, 255]];

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

    
    
    fill(MyFill[0][0], MyFill[0][1], MyFill[0][2]);
    square(MyX[0], MyY[0], 100);

    fill(255, 0, 200);
    triangle(30, 75, 58, 20, 86, 75);

    fill(MyFill[1][0], MyFill[1][1], MyFill[1][2]);
    square(MyX[1], MyY[1], 140);

    fill(0, 0, 255);
    circle(MyX[2], MyY[2], 100);

    fill(255, 255, 0);
    square(MyX[3], MyY[3], 50);
    
    fill(255, 0, 255);
    circle(MyX[4], MyY[4], 75);
    
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

for (var i = 0; i < 11; i++) {

  console.log(i);

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
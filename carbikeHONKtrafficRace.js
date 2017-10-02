var xCarGo = 640;
var xBikeGo = 290;
var yCarGo = 25;
var carColor = ["red", "black", "yellow", "orange", "violet"];
var chooseColor = carColor[Math.floor(Math.random() * carColor.length)];
var carSpeed;
var carLeftOnce = false;
var carRightOnce = false;
var bikeUpOnce = true;
var otherMouseX;
var otherMouseY;
var mouseClickCounter = 0;
var honkText = " Honk";
var honkTextArray = [];

//random color

function setup() {
  createCanvas(640, 645);
  xCarGo = 300;
  xBikeGo = 180;
  yCarGo = 0;
}

function draw() {
  background(85, 192, 217);
  //xCarGo;
  //road
  stroke("black");
  strokeWeight(1);
  fill(158, 154, 160);
  rect(-1, 315, 641, 455);

  //bike lane white line
  stroke(255);
  strokeWeight(3);
  line(-1, 365, 641, 365);

  //bike lane ID
  fill("white");
  strokeWeight(0);
  strokeCap(ROUND);
  push();
  translate(210, 360);
  rotate(-HALF_PI);
  text("BIKES!", 0, 0, 40, 40);
  pop();
  triangle(200, 320, 210, 315, 210, 325);
  triangle(200, 330, 210, 325, 210, 335);
  triangle(200, 340, 210, 335, 210, 345);
  triangle(200, 350, 210, 345, 210, 355);
  triangle(200, 360, 210, 355, 210, 365);

  //multiple cars
  emilyCar(xCarGo, carColor[3], yCarGo);
  emilyCar(xCarGo + 100, carColor[1], yCarGo + 50);
  emilyCar(xCarGo + 200, carColor[2], yCarGo + 100);
  emilyCar(xCarGo + 300, carColor[3], yCarGo + 150);
  emilyCar(xCarGo + 400, carColor[4], yCarGo + 200);

  //bike wheels
  noFill();
  stroke("black");
  strokeWeight(2);
  ellipse(xBikeGo + 350, 336, 28, 28);
  ellipse(xBikeGo + 390, 336, 28, 28);

  //bike
  noFill();
  stroke("orange");
  strokeWeight(1.5);
  strokeJoin(ROUND);
  beginShape(TRIANGLE_STRIP);
  vertex(xBikeGo + 350, 310);
  vertex(xBikeGo + 372, 335);
  vertex(xBikeGo + 380, 310);
  vertex(xBikeGo + 390, 335);
  endShape();

  //fork
  strokeWeight(2);
  line(xBikeGo + 350, 310, xBikeGo + 350, 335);

  //handlebar
  noFill();
  strokeWeight(1);
  beginShape();
  curve(xBikeGo + 350, 305, xBikeGo + 345, 305, xBikeGo + 345, 310, xBikeGo + 350, 310);
  endShape()

  //seat
  noFill();
  strokeWeight(2);
  ellipse(xBikeGo + 379, 307, 8, .5);
  strokeWeight(0);
  fill(255, 204, 0);
  arc(xBikeGo + 379, 294, 20, 20, 135, HALF_PI+PI+PI+QUARTER_PI, PIE);
  strokeWeight(2);
  stroke("black");
  point(xBikeGo + 376, 290);

  pop();

  //Honk!
  push();
  fill("white");
  strokeWeight(0);
  strokeCap(ROUND);
  textSize(30);
  text(honkTextArray.toString() + "!", otherMouseX, otherMouseY);
  pop();

 //car and bike move
 if (carLeftOnce === true) {
  xCarGo -=3;
  if (xCarGo <= -665) {
    xCarGo = 600;
  }
} else if (carRightOnce === true){
  xCarGo +=3;
  if (xCarGo >= 600) {
    xCarGo = -665;
  }
} 
if (bikeUpOnce === true) {
    xBikeGo -= 1;
    if (xBikeGo <= -400) {
      xBikeGo = 290;
    }
  }
}

function emilyCar(xCarGo, items, yCarGo) {
  //car body
  push();
  noStroke();
  fill(chooseColor);
  beginShape();
  vertex(xCarGo + 85, yCarGo + 434);
  vertex(xCarGo + 85, yCarGo + 410);
  vertex(xCarGo + 110, yCarGo + 410);
  vertex(xCarGo + 110, yCarGo + 384);
  vertex(xCarGo + 150, yCarGo + 384);
  vertex(xCarGo + 150, yCarGo + 410);
  vertex(xCarGo + 165, yCarGo + 410);
  vertex(xCarGo + 165, yCarGo + 434);
  endShape(CLOSE);
  fill(255, 204, 0);
  arc(xCarGo + 125, yCarGo + 400, 20, 20, 135, HALF_PI+PI+PI+QUARTER_PI, PIE);
  strokeWeight(2)
  stroke("black");
  point(xCarGo + 123, yCarGo + 396);
  pop();

  //car wheels
  fill("black");
  stroke("black");
  arc(xCarGo + 100, yCarGo + 434, 20, 20, 0, PI);
  arc(xCarGo + 150, yCarGo + 434, 20, 20, 0, PI);
} 

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
     carLeftOnce = true;
   } else if (keyCode === RIGHT_ARROW) {
     carRightOnce = true;
   } else if (keyCode === DOWN_ARROW) {
     carLeftOnce = false;
     carRightOnce = false;
   } else if (keyCode === UP_ARROW) {
     if (bikeUpOnce === false) {
          bikeUpOnce = true;
    } else {
      bikeUpOnce = false;
    }
  }
}

function mouseClicked() {
  otherMouseX = winMouseX;
  otherMouseY = winMouseY;
  mouseClickCounter++;
  append(honkTextArray, honkText);
  //honkTextArray.push(honkText);
}

var xCarGo = 640;
var xBikeGo = 290;

function setup() {
  createCanvas(640, 480);
  xCarGo = 300;
  xBikeGo = 180;

}

function draw() {
  background(85, 192, 217);

  //road
  stroke("black");
  strokeWeight(1);
  fill(158, 154, 160);
  rect(-1, 315, 641, 255);

  //bike lane white line
  stroke(255);
  strokeWeight(3);
  line(-1, 365, 641, 365);

//rotate this

  //bike lane triangles
  //push();
  //rotateY(90);


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

  xCarGo -= 3;
  if (xCarGo <= -165) {
    xCarGo = 600;
  }
  //car body
  noStroke();
  fill(255, 102, 0);
  beginShape();
  vertex(xCarGo + 85, 434);
  vertex(xCarGo + 85, 410);
  vertex(xCarGo + 110, 410);
  vertex(xCarGo + 110, 384);
  vertex(xCarGo + 150, 384);
  vertex(xCarGo + 150, 410);
  vertex(xCarGo + 165, 410);
  vertex(xCarGo + 165, 434);
  endShape(CLOSE);
  fill(255, 204, 0);
  arc(xCarGo + 125, 400, 20, 20, 135, HALF_PI+PI+PI+QUARTER_PI, PIE);
  strokeWeight(2)
  stroke("black");
  point(xCarGo + 123, 396);

  //car wheels
  fill("black");
  stroke("black");
  arc(xCarGo + 100, 434, 20, 20, 0, PI);
  arc(xCarGo + 150, 434, 20, 20, 0, PI);
  /*ellipse(100, 440, 20, 20);
  ellipse(150, 440, 20, 20);*/

  xBikeGo -= 1;
  if (xBikeGo <= -400) {
    xBikeGo = 290;
  }
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

}

function setup() {
  createCanvas(640, 480);
  background(85, 192, 217);
}

function draw() {
//road
  stroke("black");
  fill(158, 154, 160);
  rect(-1, 405, 641, 75);
//wheels
  fill("black");
  ellipse(100, 400, 8, 8);
  ellipse(150, 400, 8, 8);
//red body
  fill(196, 61, 37);
  stroke(196, 61, 37);
  beginShape();
  vertex(85, 394);
  vertex(85, 380);
  vertex(100, 380);
  vertex(100, 364);
  vertex(150, 364);
  vertex(150, 380);
  vertex(165, 380);
  vertex(165, 394);
  endShape(CLOSE);
//i like to bike
  fill(179, 223, 216);
  stroke(242, 92, 5);
  beginShape(TRIANGLE_STRIP);
  vertex(340, 320);
  vertex(350, 375);
  vertex(360, 320);
  vertex(370, 375);
  vertex(380, 320);
  vertex(390, 375);
  endShape();
  }

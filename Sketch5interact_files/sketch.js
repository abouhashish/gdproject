var angle =0
function setup() {
  createCanvas(800, 600,WEBGL);

}
function draw() {
  
  background(175);
  for (var i=100; i<150; i+=2){
rectMode(CENTER)
  fill(0,0,170+i);
  strokeWeight(1)
  translate(mouseX- width/2,mouseY - height/2)
  rotateY(angle)
  rotateX(angle/3)
  rotateZ(angle/2)
  ellipse(i,0,100,100)
}
angle += 0.005;

}

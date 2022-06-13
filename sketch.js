var ball = {
  x:50, 
  y:100, 
  r:25, 
  xSpeed:0, 
  color:["blue","red"]
}
function setup() { 
  createCanvas(400, 400);
}

function draw() {
  background(220); 
  circle (ball.x,ball.y,ball.r) 
  fill (ball.color[1]) 
  ball.xSpeed=2.5 
  ball.x=ball.x+ball.xSpeed
}
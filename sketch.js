function setup() {
  createCanvas(1000, 800);
  background("#4CF8A8");
}

function draw() {
 
  fill("gray")
  stroke("darkblue");
  if(mouseIsPressed)
   circle(mouseX,mouseY,50,150);
} 

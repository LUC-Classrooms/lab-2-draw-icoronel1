function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(200);
  // add your drawing code here ...
  fill("pink")
  //ellipse(width/2, height/2, 200) //head-body
triangle(width/2 - 85, height/2 - 125, width/2 - 30, height/2 - 95, width/2 - 85, height/2 - 60) // left outer ear
triangle(width/2 + 95, height/2 - 115, width/2 + 40, height/2 - 80, width/2 + 95, height/2 - 35) // right outer ear
  ellipse(width/2 - 50, height/2 + 100, 45, 20)
  ellipse(width/2 + 50, height/2 + 100, 45, 20)
  fill("brown")
  triangle(width/2 - 82, height/2 - 115, width/2 - 40, height/2 - 85, width/2 - 75, height/2 - 50) // left inner ear
  triangle(width/2 + 90, height/2 - 105, width/2 + 50, height/2 - 70, width/2 + 85, height/2 - 35) // right inner ear
  fill("pink")
  ellipse(width/2, height/2, 210) //head-body
  fill("white")
  strokeWeight(2)
  ellipse(width/2 - 50, height/2 - 20, 70) //left eye
  ellipse(width/2 + 50, height/2 + 5, 70) //right eye
 fill("teal")
  ellipse(width/2 - 40, height/2 - 15, 50) // left eye pupil
  ellipse(width/2 + 60, height/2 + 10, 50) // right eye pupil
  fill("white")
  ellipse(width/2 - 27, height/2 - 30, 10) // left eye highlight
  ellipse(width/2 + 70, height/2 - 8, 10) // right eye highlight
  noFill()
  arc(width/2, height/2, 10, 10, 0, PI) //mouth
  arc(width/2 - 75, height/2 + 30, 25, 55, 0, PI) // L arm
  arc(width/2 + 65, height/2 + 50, 25, 55, 0, PI) // R arm 
  fill("pink")
  arc(width/2 + 10, height/2 - 95, 85, 75, PI, TWO_PI+HALF_PI)
  noFill()
  arc(width/2 + 10, height/2 - 70, 65, 65, 0, PI + HALF_PI)
}
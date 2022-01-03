
function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0);
    
    let posX = width/2;
    let posY = height/2;
    
    let angle = Math.atan2(mouseY-posY, mouseX-posX);

    translate(posX, posY);
    rotate(angle)
    //rotate(angle + radians(-90))

    stroke(0, 255, 0)
    fill(255, 0, 0)
    line(-50, -25, 0, -25);
    line(0, -25, 0, -50);
    line(0, -50, 50, 0);
    line(50, 0, 0, 50);
    line(0, 50, 0, 25);
    line(0, 25, -50, 25);
    line(-50, 25, -50, -25);
}



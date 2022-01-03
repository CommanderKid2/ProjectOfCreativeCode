let ball;
let balls = [];
let gravity = 0.5;
let particles = [];

function setup() {
  createCanvas(1000, 500);
 
}



function draw() {
  background(0);
  for (let i = 0; i < 1; i++) {
    particles.push(new Particle(500, 20));
  } 
  for (let particle of particles) {
    let gravity = createVector(0, 0.2);
    particle.applyForce(gravity);
    particle.update();
    particle.edges();
    particle.show();
  }


	fill(255);
    stroke(20);
    strokeWeight(1);

	balls.push(new ballG(mouseX, mouseY, 10));
	for (let i = 0; i < balls.length; i++){
		balls[i].display();
		balls[i].update();
	}
}

class ballG{
	constructor(x, y, radius){
		this.x = x;
		this.y = y;
		this.r = radius;
		this.yspd = 0;
	}
	
	display(){
		ellipse(this.x, this.y, this.r*2, this.r*2)
	}
	
	update(){
		this.y += this.yspd;
		
		this.yspd += gravity;
		
		if ((this.y + this.r) > height){
				this.yspd *= -0.9;
		}
		
	}
}

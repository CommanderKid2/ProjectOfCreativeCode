let arrow;
let speed;
let angle;
let angleOut;

function setup(){
	createCanvas(500,500);
	speed = 4;
	angle = 60;
	arrow = new ArrowUpdated(250, 250, 0, 0, 0, 100);
	arrow.vx = speed*cos(angle * PI/180);
	arrow.vy = speed*sin(angle * PI/180);
}

function draw() {
	background(220);
	angleOut = atan2(arrow.vy, arrow.vx);
	arrow.rotation = angleOut;
	arrow.drawArrow();
	arrow.moveArrow();
}
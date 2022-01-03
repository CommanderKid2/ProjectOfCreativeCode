let ball;
let ball2;
let angle1;
let angle2;
let speed;

function setup(){
	createCanvas(500,500);


	speed = 5;
	angle1 = 25;
	angle2 = 47;

	ball = new Ball(height/2, width/2, 2, 3, 20, 155, 100, 88);
	ball2 = new Ball(height/2, width/2, 2, 3, 20, 222, 60, 60);

	ball.vx = speed*cos(angle1 *PI/180);
	ball.vy = speed*sin(angle1 *PI/180);
	ball2.vx = speed*cos(angle2 *PI/180);
	ball2.vy = speed*cos(angle2 *PI/180);
}

function draw(){
	background(30, 20, 122);
	ball.drawBall();
	ball.moveBall();
	ball2.drawBall();
	ball2.moveBall();

	//to make balls bounce
	if (ball.x > width - ball.radius || ball.x < ball.radius) {
		ball.vx =-ball.vx;
	}
	if (ball.y > height - ball.radius || ball.y < ball.radius) {
		ball.vy =-ball.vy;
	}

	if (ball2.x > width - ball2.radius || ball2.x < ball2.radius) {
		ball2.vx =-ball.vx;
	}
	if (ball2.y > height - ball2.radius || ball2.y < ball2.radius) {
		ball2.vy =-ball.vy;
	}
}
class Arrow {
	constructor(x, y, vx, vy, rotation) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.rotation = rotation;
   }

   drawArrow() {
		translate(this.x, this.y);
		let arrow = atan2(mouseY-this.y, mouseX-this.x);
		rotate(arrow);
		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);
	} 
	
	moveArrow() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}
}

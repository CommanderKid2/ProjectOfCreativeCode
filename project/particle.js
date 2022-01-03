class Particle {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(1,5));
      this.acc = createVector(0, 0);
      this.r = 4;
      this.lifetime = 255;
    }

    finished() {
        return (this.lifetime < 0);
    }

    applyForce(force) {
        this.acc.add(force);
      } 

      edges() {
        if (this.pos.y >= height-this.r) {
          this.pos.y = height-this.r;
          this.vel.y *= -1;
        }
        if (this.pos.x >= width-this.r) {
          this.pos.x = width-this.r;
          this.vel.x *= -1;
         } else if (this.pos.x <= this.r) {
          this.pos.x = this.r;
          this.vel.x *= -13;
        }
      }


update() {
    // let mouse = createVector(mouseX, mouseY);
    // this.acc = p5. Vector.sub(mouse, this.pos);
    // this.acc.setMag(0.1);
                  
     this.vel.add(this.acc);
     this.pos.add(this.vel);
     this.acc.set(0, 0);
   }

   show() {
     stroke(255);
     strokeWeight(2);
     fill(255, 100);
    ellipse(this. pos.x, this.pos.y, this.r * 2);
   }
}
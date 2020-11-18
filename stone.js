class Stone {
    constructor(x,y, width, height){
        var options = {
            isStatic=true,
            restitution:0,
            friction:1,
            density:1.2}
      this.image = loadImage("stone.png");

    }
  
    display() {
      //this.body.position.x = mouseX;
      //this.body.position.y = mouseY;
      var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop(); 
  
      if(this.body.velocity.x > 10 && this.body.position.x > 200){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
    }
  }
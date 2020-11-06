class Box {

  
    constructor(x,y,width,height) {

       
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.visiblity = 255;
    }

    display() {

        if(this.body.speed < 3){
            var pos = this.body.position;
                var angle = this.body.angle;
                push ();
                translate(pos.x,pos.y);
                rotate(angle);
                rectMode(CENTER);
                strokeWeight (4);
                stroke("black");
                fill("blue");
                rect(0,0,this.width,this.height);
                pop ();
          } else {
        
          World.remove(world,this.body);
        
          push();
          this.visibility = this.visibility - 5;
          tint (255,this.visibility);
          rect(this.body.position.x,this.body.position.y,30,50);
          pop();
        
          }
        
    }
}
  



class Bob {

          constructor(x, y) {
      
            var options = {
      
                'friction':0.5,
                'density':1.2,
                'restitution':0.3,
                'isStatic':true
           }
      
      
            this.body = Bodies.circle(x, y, 25, options);
      
            this.radius = 25;
      
           World.add(world, this.body);
      
      
          }
          display(){
      
      
            var pos =this.body.position;
      
      
            push();
      
            translate(pos.x, pos.y);
      
            ellipseMode(RADIUS);
      
            fill("red");   
      
            ellipse(0, 0, this.radius, this.radius);
      
            pop();
      
          }
        }
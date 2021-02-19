class Log{
    constructor(x,y,height,angle){
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 10, height, options);
        Matter.Body.setAngle(this.body,angle);
        this.height= height;
        
        World.add(world, this.body);
    }
    display(){
    rectMode(CENTER)
        var posx= this.body.position.x;
        var posy= this.body.position.y;
        var angle= this.body.angle;
        push()
        translate(posx,posy)
        rotate(angle)
        stroke("green")
        strokeWeight(2)
        
        rect(0,0,10,this.height);
        pop()
    }
    }

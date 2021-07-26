class Rubber{
    constructor(x,y){
        var options = {
            'dencity':1.0,
            'restitution': 0.8,
            'friction':1.0
        }
        this.body = Bodies.circle(x,y,50,options);
        World.add(world,this.body);

        this.radius = 50;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("pink");
        circle(0,0,this.radius);
        pop();
    }
}
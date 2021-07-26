class Sand{
    constructor(x,y){
        var options = {
            'dencity':1.0,
            'restitution':1.3,
            'friction':5
        }
        this.body = Bodies.circle(x,y,8,options);
        World.add(world,this.body);

        this.radius = 8;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("orange");
        circle(0,0,this.radius);
        pop();
    }
}
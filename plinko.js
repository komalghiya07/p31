class Plinko{
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.8,
            density:0.5  
        }
        this.body=Bodies.circle(x,y,20,options);
        this.r=20;
        World.add(world,this.body); 
    }
    display(){
        var angle=this.body.angle;
        push();
        ellipseMode(RADIUS);
        fill("white");
        rotate(angle);
        pop();
    }
    
}

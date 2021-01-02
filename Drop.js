class Drop{
    constuctor(x, y, radius){
        this.body = bodies.circle(x, y, radius)
        this.radius= this.radius 
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position
        ellipseMode(CENTER);
        fill("blue")
        circle(pos.x, pos.y, radius)
    }
}
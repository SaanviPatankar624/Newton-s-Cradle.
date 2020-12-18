class Pendulum{
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8,
        }
        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);

        console.log(this.body);

    }
    display(){
       push();
       ellipseMode(RADIUS);
       fill("orange");
       ellipse(this.body.position.x, this.body.position.y, 25, 25);
       pop();
    }
};
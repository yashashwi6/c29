class Link {
    constructor(bodyA,bB)
    {
        console.log(bodyA.body.bodies.length)
        var lastLink = bodyA.body.bodies.length - 2
        this.link = Constraint.create({bodyA:bodyA.body.bodies[lastLink], 
        bodyB: bB ,
        length: 10,
        stiffness : 0.1 
        })
     World.add(engine.world,this.link)
    }
}

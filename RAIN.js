class Rain{
    constructor(x,y){
        
        
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain) 
        
        
    }

    display(){
        ellipseMode(CENTER);
        ellipse(this.rain.body.x,this.rain.body.y);
    }

    update(){
        if(this.rain.position.y > height){
           Matter.Body.setPosition(This.rain,{x:random(0,400),y:random(0,400)})
        }
    }
 

}
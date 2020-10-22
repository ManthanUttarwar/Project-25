
class dustbin{
    constructor(x,y,width,height)
    {
       var options={
           isStatic : true,
           restitution : 0.3,
           friction : 0.5
        }
       
       this.x=x;
       this.y=y;
       this.width = width;
       this.height = height;
       this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options); 
       this.image = loadImage("dustbingreen.png")
       World.add(world,this.body);
    } 
    display()
    {
         var paperpos = this.body.position;

        push();
        translate(paperpos.x,paperpos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
 
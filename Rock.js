class Rock{
    constructor(x,y,width,height){
     var options={
         isStatic:false
     }
     this.body=Bodies.rectangle(x,56,21,45);
     this.width=21;
     this.height=45
    
     this.image=loadImage("images/rock1.png");
     World.add(world,this.body)
     
 }
    
    display(){
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
    }
}
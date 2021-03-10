class Boggie{
constructor(x){
    var options ={
        isStatic:false
    }
    this.body=Bodies.rectangle(x,56,21,45);
    this.width=21;
    this.height=45
    this.image=loadImage("images/coach.png");
    World.add(world,this.body)
    Matter.Body.setMass(this.body, this.body.mass*5)
}
display(){
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
}
}
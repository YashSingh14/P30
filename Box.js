class Box extends BaseClass {
  constructor(x,y){
    super(x,y,30,40);
    this.visiblity = 255;
  }

  display() {
    if(this.body.speed<5){
      super.display()
    }
    else{
      World.remove(world,this.body)
      push()
      this.visiblity = this.visiblity-5
      tint(255, this.visiblity)
      rect(this.body.position.x, this.body.position.y, 30, 40)
      pop()
    }
  }
}

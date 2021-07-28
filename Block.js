class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.blockImg = loadImage("block.png");
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos= this.body.position;
      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);

      /*if(this.body.speed < 3){
        this.block.display();
      }
      else{
        this.visiblity = this.visiblity - 5;
        tint(255,this.visiblity);
        image(this.image, this.body.position.x,this.position.y,this.body.position.width,this.body.position.height);
      }*/
    }
}
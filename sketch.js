
function preload(){
  //pre-load images
  bomd.loadImage(bomb.png)
  coin.loadImage(coin.png)
energydrink.loadImage(energydrink.png)
path.loadImage(path.png)
power.loadImage(power.png)
runner.loadImage(runner.png)
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  var bomb 
  var coin
  var energydrink
  var path 
  var power
  var runner

}

function draw() {
  background(0);
  path=creatSprite(200,200)
  path.addImage(pathing)
  path.velocityY=4
  path.scale=1.2

}

if(path.y>400){
  path.y=height/2
}


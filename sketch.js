var wall, thickness;
var bullet,speed,weight;
thickness=random(22,83)



function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50,200,90,50);
  bullet.shapeColor= "yellow";
  
  wall =createSprite(1200, 200, thickness, height/2);
  wall.shapeColor =color(80,80,80);
  speed=random(223,321);
  weight=random(30,52)
  bullet.velocityX = 5;
  
}

function draw() {
  background(0);  
  
 if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
   
   var damage=0.5*weight*speed*speed*speed/(thickness*thickness*thickness)
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
if(damage<10){
  wall.shapeColor=color(0,255,0);

}
else{
  wall.shapeColor =color(80,80,80);
}
 }
 
 bullet.collide(wall);
  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=lbullet.x +lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
else{
  return false;
}
}

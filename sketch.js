var wall;
var bullet,speed,weight;

function setup(){
createCanvas(1600,400);

speed=random(55,90)
weight=random(400,1500) 
thickness=random(22,83)

bullet=createSprite(50,200,50,5);
bullet.velocityX=speed;
bullet.shapColor=color(255);

wall=createSprite(1200,200,thickness, height/2);
wall.shapColor=color(80,80,80)
}

function draw(){
background(0);
drawSprites();
if(wall.x-bullet.x < (bullet.width+wall.width)/2)
{
bullet.velocityX=0;
var deformation=0.5 * weight * speed * speed/22509;
if(deformation>180)
{
  wall.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100)
{
    wall.shapeColor=color(230,230,0);

}
if(deformation<100)
{
   wall.shapeColor=color(0,255,0);
}
}
}
































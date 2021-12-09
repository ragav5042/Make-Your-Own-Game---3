var boy
var life=300

function preload(){
  runningAni=loadAnimation("leg1.png","leg2.png","leg3.png","leg4.png","leg5.png","leg6.png","leg7.png","leg8.png")
  bgImage=loadImage("bluebg.jpeg")
  groundImg=loadImage("ground.png")
  sunImg=loadImage("sun.png")
  hurdleImg=loadImage("hurdle1.png")
  heartImg=loadImage("heart_1.png")
}


function setup() {

  createCanvas(800,400);
  ground=createSprite(400,360,50,50)
  ground.addImage("grou",groundImg)
  ground.scale=0.5
  ground.velocityX=-5


   boy= createSprite(100,300, 50, 50);
 boy.addAnimation("running",runningAni)
 boy.scale=0.9
boy.debug=true
boy.setCollider("rectangle",0,0,100,200)

heart1=createSprite(65,50,50,50)
heart1.addImage("heart",heartImg)
heart1.scale=0.3

heart2=createSprite(125,50,50,50)
heart2.addImage("heart",heartImg)
heart2.scale=0.3

heart3=createSprite(185,50,50,50)
heart3.addImage("heart",heartImg)
heart3.scale=0.3

sun=createSprite(700,80,20,20)
sun.addImage("suni",sunImg)
sun.scale=0.3


 invisibleGround=createSprite(400,370,800,5)
 invisibleGround.visible=false

 hurdlesGroup= new Group()

}

function draw() {
  background(bgImage);  
  boy.collide(invisibleGround)
  
  if(ground.x<170){
    ground.x=400
  }

  if(keyDown("space")){
    boy.velocityY-=6
  }
  boy.velocityY+=1
  spawnHurdles()
 if(hurdlesGroup.isTouching(boy)){
   boy.destroy()
   ground.velocityX=0
   hurdlesGroup.destroyEach()
 }
 
  drawSprites();
  
}

function spawnHurdles(){
  if(frameCount % 130===0){
   var hurdle=createSprite(width-100,340,25,25)
    hurdle.addImage("hud",hurdleImg)
    hurdle.scale=0.2
    hurdle.velocityX=-4
hurdle.lifetime= 200
hurdle.debug=true
hurdle.setCollider("rectangle",0,0,300,200)
    hurdlesGroup.add(hurdle)
  }
 
}
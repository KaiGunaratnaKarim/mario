PLAY = 1
END = 0
var gamestate = PLAY
var mario, mario_running;
var score = 0
function preload(){
  mario_running = loadAnimation("1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png")
  grounding = loadImage("block1.png")
  mu1 = loadImage("mushroom1.png")
  mu2 = loadImage("mushroom2.png")
  mu3 = loadImage("mushroom3.png")
  mu4 = loadImage("mushroom4.png")
  mu5 = loadImage("mushroom5.png")
  mu6 = loadImage("mushroom6.png")
  mu7 = loadImage("mushroom7.png")
  mu8 = loadImage("mushroom8.png")
  heart = loadImage("heart.png")
  mario_hy = loadImage("mario_jump.png")
  play = loadImage("play.png")
}

function setup() {
 createCanvas(600,200)
  
 mario = createSprite(35, 180, 30, 15)
 mario.addAnimation("running", mario_running)
 mario.addAnimation("spun", mario_hy)
 mario.scale = 0.5
 ground = createSprite(0, 180, 600, 200)
 ground.addImage("block1.png", grounding)
 ground.velocityX = -5
 ground.x = ground.width / 2
 ground.debug = false
 ground1 = createSprite(0,190,600,10)
 ground1.visible = false
 mushroomgroup = createGroup()
}

function draw(){
  background("white")
  drawSprites()
  if(gamestate==PLAY) {
    if(ground.x <= 0) {
      ground.x = ground.width / 2
    }

    ground.velocityX = -5

    if(keyDown("space")&&mario.y>160) {
      mario.velocityY = -10
      //boop.play()
    }
  
    mario.velocityY = mario.velocityY + 0.8

    if(mushroomgroup.isTouching(mario)) {
      gamestate=END
      
      //piggyback.play()
    }

    score = score + Math.round(getFrameRate())

    /*if(score% 100==0) {
      console.log("celebrate")
      woo.play()
    }

    no.visible = false
    yes.visible = false

    cactus()
    clood()*/

  }
  if (gamestate==END) {
    mario.changeAnimation("ded")
    ground.velocityX = 0
    mario.velocityX = 0
    mushroomgroup.setVelocityXEach(0)
    //cloudgroup.setVelocityXEach(0)
    /*no.visible = true
    yes.visible = true*/

    /*if (mousePressedOver(yes)) {
    reset()*/
  }
  
  //mario.collide(ground1)

  textSize(18)
  text("Score: " + score, 480, 40)
}

function mush(){
  if(frameCount% 70==0) {
  obs = createSprite(590, 165, 10, 20)
  obs.velocityX = -5
  obs.scale = 0.4
  rand = Math.round(random(1,6))
  switch(rand) {
    case 1: obs.addImage(mu1)
    break;
    case 2: obs.addImage(mu2)
    break;
    case 3: obs.addImage(mu3)
    break;
    case 4: obs.addImage(mu4)
    break;
    case 5: obs.addImage(mu5)
    break;
    case 6: obs.addImage(mu6)
    break;
    case 7: obs.addImage(mu7)
    break;
    case 8: obs.addImage(mu8)
    break;
    case 9: obs.addImage(mu9)
    break;
    case 10: obs.addImage(mu10)
    break;
    case 11: obs.addImage(mu11)
    break;
    }
    mushroomgroup.add(obs)
  }
}
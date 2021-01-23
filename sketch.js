var mouse1,mouse2,mouse3,mouse4
var cat1,cat2,cat3,cat4
var garden
function preload() {
    //load the images here
    cat1=loadImage("cat1.png")
    cat2=loadAmimation("cat2.png")
    cat3=loadAnimation("cat3.png")
    cat4=loadImage("cat4.png")

    mouse1=loadImage("mouse1.ipng")
    mouse2=loadImage("mouse2.png")
    mouse3=loadAnimation("mouse3.png")
    mouse4=loadImage("mouse4.png")

    garden=loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat1=createSprite(10,800,50,50)
mouse1=createSprite(10,100,50,50)

mouse1.addAnimation("running", mouse2);
mouse1.addAnimation("collided", mouse3);
cat1.addAnimation("running", cat2);
cat1.addAnimation("collided", cat3);
}

function draw() {

    background(0,0,0);
    //Write condition here to evalute if tom and jerry collide
if (isTouching(mouse3,cat3)){
    mouse3.changeAnimation("collided",mouse4)
    cat3.changeAnimation("collided",cat4)
    cat3.velocityY=0
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if (keyPressedOver("cat1")){
        cat1.changeAnimation("running",cat2)
        cat2.changeAnimation("running",cat3)
        cat2.velocityY=12
        cat3.velocityY=12

    }
    else{
        mouse1.changeAnimation("running",mouse2)
        mouse2.changeAnimation("running",mouse3)
      }
      }

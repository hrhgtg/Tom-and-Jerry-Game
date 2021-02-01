var bckg, bckgI, cat, mouse, rat, kitten;
var tiger, scorpion, potya, puma;

function preload() {
    //load the images here
    bckgI = loadImage("garden.png");
    kitten = loadAnimation("cat2.png","cat3.png");
    potya =  loadAnimation("cat1.png");
    tiger = loadAnimation("cat4.png");
    rat = loadAnimation("mouse2.png","mouse3.png");
    puma = loadAnimation("mouse1.png");
    scorpion = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(900,800);
    //create tom and jerry sprites here
    bckg = createSprite (200,200,20,20);
    bckg.addImage(bckgI);

    cat = createSprite (500,300);
    cat.addAnimation("Tom", potya);
    cat.scale = 0.1;

    mouse = createSprite (100,300);
    mouse.addAnimation("Jerry", puma);
    mouse.scale = 0.1;
   // mouse.setCollider
   // ("rectangle",0,0,mouse.width,mouse.height);
}

function draw() {
    keyPressed();
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < 60){
        cat.velocityX = 0;
        cat.addAnimation("Cat Last Image", tiger);
        cat.changeAnimation("Cat Last Image", tiger);
        cat.scale = 0.1;

        mouse.addAnimation("Rat Last Image", scorpion);
        mouse.changeAnimation("Rat Last Image", scorpion);
        mouse.scale = 0.1;
    }
    drawSprites();
    text (mouseX+ ',' +mouseY, 10, 45);
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
   cat.velocityX = -5;
   cat.addAnimation("Cat Running", kitten);
   cat.changeAnimation("Cat Running", kitten);
   cat.scale = 0.1;

   mouse.addAnimation("Rat Dancing", rat);
   mouse.changeAnimation("Rat Dancing", rat);
   mouse.scale = 0.1;
}
}

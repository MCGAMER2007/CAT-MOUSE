
var cat, cat_running, cat_collided;
var mouse_dance, mouse_collided;
var backgroundImage;

function preload() {
    //load the images here
    cat_running = loadAnimation("image/cat3.png","cat2.png");
    cat_collided = loadAnimation("cat4.png");
    backgroundImage = loadAnimation("garden.png");
    mouse_dance = loadAnimation("mouse2.png, mouse3.png");
    mouse_collided = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    
    93 = createSprite(50,180,20,50);
  cat.addAnimation("running", cat_running);
  cat.addAnimation("collided" , cat_collided);
  cat.scale = 0.5;

  mouse_dance.addAnimation("dancing", mouse);
} 

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}

 
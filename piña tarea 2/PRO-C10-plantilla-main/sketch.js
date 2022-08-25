
var background;
var sonrisa;
var coete



function preload(){
  sonrisa = loadImage("./imagenes/nyctophobia4.png");
//coete = loadImage("./imagenes/sprite_1.png")
  
  
}

function setup(){
  createCanvas(400,400);
  dientes = createSprite(270,200);
 dientes.addImage(sonrisa);
  dientes.scale= 1;



 

  
 
}

function draw() {
  background("black");
 

 
  drawSprites()
}

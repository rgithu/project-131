img="";

function preload(){
img = loadImage('kitchenimage.jpg');
}

function setup(){
    canvas = createCanvas(550 , 450);
    canvas.center();
}

function draw(){
    image(img , 0 , 0 , 550 , 450);
}
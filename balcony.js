img="";

function preload(){
img = loadImage('photo-1619082791183-1888233d6569.jpg');
}

function setup(){
    canvas = createCanvas(350 , 450);
    canvas.center();
}

function draw(){
    image(img , 0 , 0 , 350 , 450);
}
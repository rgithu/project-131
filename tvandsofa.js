img="";

function preload(){
img = loadImage('modern-white-media-unit-for-living-room.jpg');
}

function setup(){
    canvas = createCanvas(700 , 400);
    canvas.center();
}

function draw(){
    image(img , 0 , 0 , 700 , 400);
}
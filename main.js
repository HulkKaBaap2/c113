function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video =createCapture(VIDEO)
    video.hide()
   

    tint_color ="";
}
function draw(){
fill(255, 0 ,0);
stroke(255, 0 ,0);
circle(50, 50, 80);

circle(50, 430, 80);

circle(590, 50, 80);

circle(590, 430, 80);


fill(255, 0 ,0);
stroke(255, 0 ,0);
rect(90, 40, 460, 20);

rect(90, 420, 460, 20);

rect(40, 90,20, 300);

rect(580, 90, 20, 300);



    
image (video,230,150,220,200)

filter ('invert');




 
}


function take_snapshot(){
    save("Person.png")
}

rect(70,100, 55, 55);
describe('white rect with black outline in mid-right of canvas');
function setup(){
    canvas= createCanvas(400,380)
 canvas.center()

}
video=""
objects= []
status=""
function preload(){
video= createVideo('video.mp4')
video.hide();
}
function draw(){
    image(video,0,0,400,400);
    if(status != "" ){
for(i=0; i<objects.length; i++){
    document.getElementById("status").innerHTML= "status= detecting objects";
    document.getElementById("no.of_objects").innerHTML= "no.of objects detected=" + objects.length;

    fill("red");
    percent= floor(objects[i].confidence*100)
    text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y)
    noFill();
    stroke("red")
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)

}

}}
function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "status= detecting objects";

}
function gotResult(error,results){
    if (error){
        console.log(error)
    }
    console.log(results)
    objects= results
}
function modelLoaded(){
    status= true;
    video.loop();
    video.speed(1);
    video.volume(0);
    console.log(modelLoaded)

}
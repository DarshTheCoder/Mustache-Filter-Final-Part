noseX=0;
noseY=0;
function preload(){
    mustache_img=loadImage("https://i.postimg.cc/151ffdm4/Ms.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,ModelLoaded);
    posenet.on("pose",gotPoses);
}
function draw(){
    image(video,0,0,300,300);
image(mustache_img,noseX,noseY,40,40);
}
function take_snapshot()
{
    save('myFilterImage.png')
}
function ModelLoaded()
{
    console.log("Posenet Is Initialized");
}
function gotPoses(results)
{
if(results.length > 0)
{
    console.log(results);
   noseX=results[0].pose.nose.x-20;
noseY=results[0].pose.nose.y;
    console.log("Nose X ="+results[0].pose.nose.x);
    console.log("Nose Y ="+results[0].pose.nose.y);
}
}
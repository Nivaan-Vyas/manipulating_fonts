noseX=0;
noseY=0;
LeftWristX=0;
rightWristX=0;
difference=0;
function preload(){


}
function setup(){
  video=createCapture(VIDEO);
  video.size(550,550);
  canvas= createCanvas(550,550);
  canvas.position(560,150);  
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on('pose', gotPoses);
}
function modelLoaded(){
console.log('posenet is initialized yay woohooo amazing awesome!')
}
function gotPoses(results){
  if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
  }
}
function draw(){
  background("#969A97");
  document.getElementById("font_size").innerHTML="font size of text shall be:"+difference+"px";
  textSize(difference);
  fill("#fa3e00");
  text("Nivaan",50,400);
}
noseX = 0 ;
noseY = 0 ;
difference = 0 ;
rightWristX = 0 ;
leftWristX = 0 ;

function setup() {
    video = createCapture(VIDEO) ;
    video.size(550,500) ;

    canvas = createCanvas(400,400) ;
    canvas.position(560,150) ;

    poseNet = ml5.poseNet(video, modelLoaded) ;
    poseNet.on('pose' , gotPoses) ;
}

function draw() {
    background('#6C91C2') ;
    fill('#FFE787') ;
    textSize(difference) ;
    text("Mr.Coder",50,400) ;
}
function modelLoaded() {
    console.log("PoseNet Is Initialised") ;
}

function gotPoses(results) {
      if(results.length > 0) {

          rightWristX = results[0].pose.rightWrist.x ;
          leftWristX = results[0].pose.leftWrist.x ;
          difference = floor(leftWristX-rightWristX) ;

      }
}
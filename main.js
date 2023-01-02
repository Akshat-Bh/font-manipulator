leftWristX=0;
rightWristX=0;
noseX=0;
noseY=0;
difference=0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 550)

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    text("Akshat Bharadwaj", noseX, noseY);
    textSize(difference);

    background('#969A97');

    document.getElementByID("font_size").innerHTML = "The size of the font is= " + difference + "px";

    fill('#F90093');
    stroke('#F90093');
    
} 

function modelLoaded()
{
    console.log('PostNet Is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;

        console.log("Nose X= " + noseX + "Nose Y= " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = Math.floor(leftWristX - rightWristX);

        console.log("Right Wrist X= " + rightWristX + "Left Wrist X= " + leftWristX + "Difference= " + difference);
    }

}
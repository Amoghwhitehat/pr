function setup()
{
    video=createCapture(VIDEO);
    canvas = createCanvas(500,500);
    canvas.position(550,150);

   poseNet=ml5.poseNet(video,modelLoaded);
   poseNet.on('pose',gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is Initiated');
}
function draw()
{
    background('yellow')
}
function gotPoses(results)
{
     if(results.length>0)
     {
         console.log(results);
     }
}


//to get the navigator userMedia class,it is required for webcam stream..
navigator.getUserMedia = ( navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia);
var videoStream;
var canvas,img,uname,video;

function startWebcam() {
    video.style.visibility="visible";
    if (navigator.getUserMedia) {
    navigator.getUserMedia (
    
    // constraints
    {
    video: true,
    audio:false
    },
    
    // successCallback
    function(localMediaStream) {
        // localMediaStream has the video stream
    
    // video variable has the video tag 
    //giving video tag the source of video
    video.src = window.URL.createObjectURL(localMediaStream);
    videoStream = localMediaStream;
    
    },
    
    // errorCallback
    function(err) {
    console.log("The following error occured: " + err);
    }
    );
    } else {
    console.log("getUserMedia not supported");
    }  
}
function init() {
    // Get the canvas and obtain a context for
    // drawing in i
    //dlnk = document.getElementById("downloadlnk")
    video = document.querySelector('video');
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
     uname = prompt("Enter your name:")    
}
function stopWebcam()
{
    videoStream.getTracks()[0].stop();
}
function snapshot() {
    // Draws current image from the video element into the canvas
    ctx.drawImage(video, 0,0, canvas.width, canvas.height);
     img = canvas.toDataURL('image/png');
     stopWebcam();
     pic = document.getElementById('dbtn');
     pic.href=img;
     pic.download=uname+".png";
     video.style.visibility = "hidden";
    
    }
function stopWebcam()
{
    videoStream.getTracks()[0].stop();
}



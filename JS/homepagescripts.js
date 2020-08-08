var myVideo = document.getElementById("video1"); 

function play() {  
        myVideo.play();  
} 

function pause()  {
		myVideo.pause();
}

function makeBig() { 
    myVideo.width = 1080; 
} 

function makeSmall() { 
    myVideo.width = 480; 
} 

function makeNormal() { 
    myVideo.width = 720; 
} 
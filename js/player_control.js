$(document).ready(function(){
var video = document.getElementById('video');
var playpause = document.getElementById('play_pause');
var sound = document.getElementById('sound');
var progress = document.getElementById("progress");
var volumeBar = document.getElementById("volume");
var full_screen = document.getElementById('full_screen');
var currentTimeDisplay = document.getElementById('current');
var totalVideoTime = document.getElementById('lenght');

function playPause(){

    if(video.paused){
        video.play();
        playpause.classList.add('pause');
        playpause.classList.remove('play');
    } else {
        video.pause();
        playpause.classList.remove('pause');
        playpause.classList.add('play');
    }  
}

function soundOnOff(){

    if(video.muted){
        video.muted = false;
        sound.classList.add('sound-on');
        sound.classList.remove('sound-off');
    } else {
        video.muted = true;
        sound.classList.remove('sound-on');
        sound.classList.add('sound-off');
    }  
}

$('.video_container').hover(function(){
        $('#controls').css("display", "flex");
        $('#player_container').css("bottom", "72px");
        }, function(){
        $('#controls').css("display", "none");
        $('#player_container').css("bottom", "30px");
    });
full_screen.addEventListener("click", function() {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen(); // Firefox
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen(); // Chrome and Safari
  }
});

progress.addEventListener("change", function() {
  // Calculate the new time
  var time = video.duration * (progress.value / 100);
  // Update the video time
  video.currentTime = time;
});

video.addEventListener("timeupdate", function() {
  // Calculate the slider value
  var value = (100 / video.duration) * video.currentTime;

  // Update the slider value
  progress.value = value;
});

volumeBar.addEventListener("change", function() {
    var value = volumeBar.value;
  video.volume = value;
});
function highlight(num) {
    $('.highlight').removeClass("highlight");
    if (num !== null) {
        $(num).addClass("highlight");
    }     
}
function time(){
  var curmins = Math.floor(video.currentTime / 60);
  var cursecs = Math.floor(video.currentTime - curmins * 60);
  var durmins = Math.floor(video.duration / 60);
  var dursecs = Math.floor(video.duration - durmins * 60);
  totalVideoTime.innerHTML = durmins+":"+dursecs;
  currentTimeDisplay.innerHTML = curmins+":"+cursecs;

  var time = video.currentTime.toFixed(2); 
   if (time >= 0.18 && time < 4.13) {
            highlight('#1'); 
    } else if (time >= 4.13 && time < 7.54) {
            highlight('#2');
    } else if (time >= 7.54 && time < 11.27) {
            highlight('#3');    
    } else if (time >= 11.27 && time < 13.96) {
            highlight('#4');    
    }  else if (time >= 13.96 && time < 17.94) {
            highlight('#5');    
    } else if (time >= 17.94 && time < 22.37) {
            highlight('#6');    
    } else if (time >= 22.37 && time < 26.88) {
            highlight('#7');    
    } else if (time >= 26.88 && time < 30.92) {
            highlight('#8');    
    } else if (time >= 32.10 && time < 34.73) {
            highlight('#9');    
    } else if (time >= 34.73 && time < 39.43) {
            highlight('#10');    
    } else if (time >= 39.43 && time < 41.19) {
            highlight('#11');    
    } else if (time >= 42.35 && time < 46.30) {
            highlight('#12');    
    } else if (time >= 46.30 && time < 49.27) {
            highlight('#13');   
    } else if (time >= 49.27 && time < 53.76) {
            highlight('#14');    
    } else if (time >= 53.76 && time < 57.78) {
            highlight('#15');    
    } else if (time >= 57.78 && time < 59.00) {
            highlight('#16');    
    } else {
            highlight(null); 
    }
}
video.ontimeupdate =time;
playpause.onclick = playPause;
sound.onclick = soundOnOff;

});

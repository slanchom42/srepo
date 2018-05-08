var track = document.getElementById("track");
var playButton = document.getElementById("play");
var pauseButton = document.getElementById("pause");
var stopButton = document.getElementById("stop");

playButton.addEventListener("click", play);
pauseButton.addEventListener("click", pause);
stopButton.addEventListener("click", stop);

function play() { track.play(); }

function pause() { track.pause(); }

function stop() {
  pause();
  track.currentTime = 0;
 }

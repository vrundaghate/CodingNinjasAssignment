// Convert time to a format of hours, minutes, seconds, and milliseconds

function convertTimeToString(time) {
  let diffInHrs = time / 3600000;
  let hh = Math.floor(diffInHrs);

  let diffInMin = (diffInHrs - hh) * 60;
  let mm = Math.floor(diffInMin);

  let diffInSec = (diffInMin - mm) * 60;
  let ss = Math.floor(diffInSec);

  let diffInMs = (diffInSec - ss) * 100;
  let ms = Math.floor(diffInMs);

  let formattedMM = mm.toString().padStart(2, "0");
  let formattedSS = ss.toString().padStart(2, "0");
  let formattedMS = ms.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

// Declare variables to use in our functions below

let startTime;
let elapsedTime = 0;
let timerInterval;
let timerStatus = "reset";

// Create function to modify innerHTML

function print(txt) {
  document.getElementById("time-display").innerHTML = txt;
}

// Create "start", "pause" and "reset" functions

function startTimer() {
  if (timerStatus == 'reset' || timerStatus == 'pause') {
    timerStatus = 'play';
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
      elapsedTime = Date.now() - startTime;
      print(convertTimeToString(elapsedTime));
    }, 10);
  }
}

function pauseTimer() {
  if (timerStatus == 'play') {
    timerStatus = 'pause';
    clearInterval(timerInterval);
  }
}

function resetTimer() {
  if (timerStatus == 'play' || timerStatus == 'pause') {
    timerStatus = 'reset';
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
  }
}

// Create event listeners

let playButton = document.getElementById("play-button");
let pauseButton = document.getElementById("pause-button");
let resetButton = document.getElementById("reset-button");

playButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

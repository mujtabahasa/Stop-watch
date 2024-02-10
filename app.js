let hour = 0
let min = 0;
let sec = 0;
let msec = 0;
let hourHeading = document.getElementById("hour")
let minHeading = document.getElementById("min");
let secHeading = document.getElementById("sec");
let msecHeading = document.getElementById("msec");
let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let isRunning = false;
let interval;

function timer(){
  msec++
  msecHeading.innerHTML = msec;
  if(msec >= 100){
sec++
secHeading.innerHTML = sec;
msec = 0
  }else if(sec >= 60){
    min++
    minHeading.innerHTML = min
    sec = 0
  }else if(min >= 60){
    hour++
    hourHeading.innerHTML = hour;
    min = 0
  }
}

function start(){
  
    interval = setInterval(timer,10)
    // isRunning = true;
    // startBtn.disabled = true
    startBtn.disabled = true;
    pauseBtn.disabled = false;
  }


function pause(){
  clearInterval(interval);
  startBtn.disabled = false;
  pauseBtn.disabled = true;

}

function reset(){
  hour = 0;
  min = 0;
  sec = 0;
  msec = 0;
  hourHeading.innerHTML = hour
  minHeading.innerHTML = min;
  secHeading.innerHTML = sec;
  msecHeading.innerHTML = msec;
  pause()
}
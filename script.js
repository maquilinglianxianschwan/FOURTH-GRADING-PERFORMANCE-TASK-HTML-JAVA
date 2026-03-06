function updateClock(){

const now = new Date();

let h = String(now.getHours()).padStart(2,"0");
let m = String(now.getMinutes()).padStart(2,"0");
let s = String(now.getSeconds()).padStart(2,"0");

document.getElementById("clock").textContent = h + ":" + m + ":" + s;

checkAlarm(h + ":" + m);
}

setInterval(updateClock,1000);


let stopwatchTime = 0;
let stopwatchInterval = null;

function startStopwatch(){

if(!stopwatchInterval){

stopwatchInterval = setInterval(function(){

stopwatchTime++;

let h = String(Math.floor(stopwatchTime/3600)).padStart(2,"0");
let m = String(Math.floor((stopwatchTime%3600)/60)).padStart(2,"0");
let s = String(stopwatchTime%60).padStart(2,"0");

document.getElementById("stopwatch").textContent = h + ":" + m + ":" + s;

},1000);

}

}

function stopStopwatch(){
clearInterval(stopwatchInterval);
stopwatchInterval = null;
}

function resetStopwatch(){
stopStopwatch();
stopwatchTime = 0;
document.getElementById("stopwatch").textContent = "00:00:00";
}


let alarmTime = null;

function setAlarm(){
alarmTime = document.getElementById("alarmTime").value;
alert("Alarm set for " + alarmTime);
}

function checkAlarm(currentTime){
if(alarmTime === currentTime){
alert("Alarm Ringing!");
alarmTime = null;
}
}
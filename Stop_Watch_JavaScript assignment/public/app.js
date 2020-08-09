var msec = 0;
var sec = 0;
var min = 0;
var minValue  = document.getElementById("min");
var secValue = document.getElementById("sec");
var msValue = document.getElementById("msec");

var interval;
var running = 0;

function timer() {
    msec++;
    msValue.innerHTML = msec;
    if (msec >= 100) {
        sec++;
        secValue.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60) {
        min++;
        minValue.innerHTML = min;
        sec = 0;
    }
}

function start() {
    if (running === 0) {
        running = 1;
        interval = setInterval(timer, 10)
        document.getElementById("start").innerHTML = "Pause"
    }else {
        running = 0;
        document.getElementById("start").innerHTML = "Resume"
        pause()

    }
    
    // document.getElementById("start").disabled = true;
}

function pause() {
    clearInterval(interval);
    document.getElementById("start").disabled = false;
}

function reset() {
    min = 0;
    sec = 0;
    msec = 0;
    minValue.innerHTML =min;
    secValue.innerHTML = sec;
    msValue.innerHTML = msec;
    pause();
    running = 0;
    Laps.innerHTML = ""
    document.getElementById("start").innerHTML = "Start"
    document.getElementById("start").disabled = false;
}


var Lap = document.getElementById("Lap");
var Laps = document.getElementById("laps");
Lap.onclick = function() {
    Laps.innerHTML += "<li>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + min + " : " + sec + " : " + msec + "</li>";
};
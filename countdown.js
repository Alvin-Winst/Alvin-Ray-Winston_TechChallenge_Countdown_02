var day = document.getElementById("day");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");

var countdownBtn = document.getElementById("startCountdown");

var dayCount = document.getElementById("dayCountdown");
var hourCount = document.getElementById("hourCountdown");
var minuteCount = document.getElementById("minuteCountdown");
var secondCount = document.getElementById("secondCountdown");

var closeBtn = document.getElementById("closeCountdown");

var titlePage = document.getElementById("title");
var setup = document.getElementById("setup");
var countdown = document.getElementById("countdown");

day.addEventListener("focusout",dyChange);
hour.addEventListener("focusout",hrChange);
minute.addEventListener("focusout",minChange);
second.addEventListener("focusout",secChange);

var dy, hr, min, sec;
var timer = false;

countdownBtn.addEventListener("click",function(){
    dy = parseInt(day.value);
    hr = parseInt(hour.value);
    min = parseInt(minute.value);
    sec = parseInt(second.value);
    if (dy==0 && hr==0 && min==0 && sec==0){
        document.getElementById("countdownAlert").style.display = "block";
        return;
    }
    document.getElementById("countdownAlert").style.display = "none";
    titlePage.style.display = "none";
    setup.style.display = "none";
    countdown.style.display = "block";
    timer = true;
    countDownChange();
});

closeBtn.addEventListener("click",function(){
    titlePage.style.display = "block";
    setup.style.display = "block";
    countdown.style.display = "none";
    timer = false;
});

function dyChange(){
    if(day.value==""){
        day.value = 0;
    }
    let dy = parseInt(day.value);
    if(dy>99){
        day.value = "99";
    }
}

function hrChange(){
    if(hour.value==""){
        hour.value = 0;
    }
    let hr = parseInt(hour.value);
    let dy = parseInt(day.value);
    if(hr>23){
        day.value = dy + parseInt(hr/24);
        hour.value = hr%24;
        dyChange();
    }
}
function minChange(){
    if(minute.value==""){
        minute.value = 0;
    }
    let min = parseInt(minute.value);
    let hr = parseInt(hour.value);
    if(min>59){
        hour.value = hr + parseInt(min/60);
        minute.value = min%60;
        hrChange();
    }
}
function secChange(){
    if(second.value==""){
        second.value = 0;
    }
    let sec = parseInt(second.value);
    let min = parseInt(minute.value);
    if(sec>59){
        minute.value = min + parseInt(sec/60);
        second.value = sec%60;
        minChange();
    }
}

function countDownChange(){
    if (!(dy==0 && hr==0 && min==0 && sec==0) && timer==true) {
        var dyString = dy;
        var hrString = hr;
        var minString = min;
        var secString = sec;
        if(dy<10){
            dyString = "0" + dyString;
        }
        if(hr<10){
            hrString = "0" + hrString;
        }
        if(min<10){
            minString = "0" + minString;
        }
        if(sec<10){
            secString = "0" + secString;
        }
        dayCount.innerHTML = dyString;
        hourCount.innerHTML = hrString;
        minuteCount.innerHTML = minString;
        secondCount.innerHTML = secString;
    
        if (sec==0) {
            sec = 59;
            if (min==0) {
                min = 59;
                if (hr==0) {
                    hr = 23;
                    dy--;
                }
                else{
                    hr--;
                }
            }
            else{
                min--;
            }
        }
        else{
            sec--;
        }
        setTimeout(countDownChange,1000);
    }
    else{
        dayCount.innerHTML = "00";
        hourCount.innerHTML = "00";
        minuteCount.innerHTML = "00";
        secondCount.innerHTML = "00";
        titlePage.style.display = "block";
        setup.style.display = "block";
        countdown.style.display = "none";
    }
    if(dy==0 && hr==0 && min==0 && sec==0){
        day.value = 0;
        hour.value = 0;
        minute.value = 0;
        second.value = 0;
        window.location.href = "blank.html";
    }
}
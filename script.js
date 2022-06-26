const display = document.querySelector(".displaytime");
const btnPlay = document.querySelector('.play');
const btnStop = document.querySelector('.stop');

let timer;
let msec = 0;
let sec = 0;
let min = 0;
let isWatchStop = true;

const timeOfWatch = () => {
    msec++;
    if (msec == 100) {
        sec++;
        msec = 0;
    }
    if (sec == 60){
        min++;
        sec = 0;
    }
    min = String(min).length < 2 ? "0" + min : min;
    sec = String(sec).length < 2 ? "0" + sec : sec;
    msec = String(msec).length < 2 ? "0" + msec : msec;
    display.innerHTML = `${min}:${sec}:${msec}`;
};

const playTime = () =>{
    timer = setInterval(timeOfWatch, 10);
};

const stopTime = () => {
    clearInterval(timer);
};

btnPlay.addEventListener("click", () => {
    isWatchStop =!isWatchStop;
    if(isWatchStop == false){
    playTime();
    btnPlay.innerHTML =  `<i class="fa-solid fa-circle-pause"></i> PAUSE`
    } else{
        stopTime();
        btnPlay.innerHTML = ` <i class="fa-solid fa-circle-play"></i> PLAY`;
    }
});

btnStop.addEventListener("click", () =>{
    isWatchStop = true;
    stopTime();
    msec = 0;
    sec = 0;
    min = 0;
    display.innerHTML = `0${min}:0${sec}:0${msec}`;
    btnPlay.innerHTML = ` <i class="fa-solid fa-circle-play"></i> PLAY`;
})


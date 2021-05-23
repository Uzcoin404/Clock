const clockButton = document.querySelector(".clock__button")
const stopwatchButton = document.querySelector(".stopwatch__button")
const content = document.querySelector(".content")
const title = document.querySelector(".title")

// Clock move to Stopwatch

stopwatchButton.addEventListener('click', () => {
    content.classList.add("move-mode");
});

clockButton.addEventListener('click', () => {
    content.classList.remove("move-mode");
});

// Stopwatch Start Button animate

// const buttons = document.querySelectorAll('.start');
// buttons.forEach(btn => {

//     btn.addEventListener('click', function(e) {

//         let x = e.clientX - e.target.offsetLeft;
//         let y = e.clientY - e.target.offsetTop;

//         let ripples = document.createElement('span');
//         ripples.style.left = x + 'px';
//         ripples.style.top = y + 'px';

//         this.appendChild(ripples);

//         setTimeout(() => {
//             ripples.remove()
//         },1000);

//     });

// });


$(document).ready(function(){
    
    $('.clock__button').click(function(){
        $('.clock__button').addClass("show");
        $('.stopwatch__button').removeClass("show");
    });

    $('.stopwatch__button').click(function(){
        $('.stopwatch__button').addClass("show");
        $('.clock__button').removeClass("show");
    });

});

// Clock

const nHour = document.querySelector('.numberClock__hour'),
    nMin = document.querySelector('.numberClock__min'),
    nSec = document.querySelector('.numberClock__sec'),
    sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h');


function clock(){

    let time = new Date(),
        getHour = time.getHours(),
        getMin = time.getMinutes(),
        getSec = time.getSeconds();

    nHour.innerHTML = getHour < 10 ? "0" + getHour : getHour;
    nMin.innerHTML = getMin < 10 ? "0" + getMin : getMin;
    nSec.innerHTML = getSec < 10 ? "0" + getSec : getSec;

    sec.style = `transform: rotate(${getSec * 6}deg); transition: 1s linear`
    min.style = `transform: rotate(${getMin * 6}deg); transition: 1s linear`
    hour.style = `transform: rotate(${getHour * 30}deg); transition: 1s linear`

    setTimeout(() => clock(), 1000)

}
clock()

// Panel little animate

const cog = document.querySelector('.fas.fa-cog'),
      x = document.querySelector('.fas.fa-times'),
      panel = document.querySelector('.panel');


cog.addEventListener('click', function() {
    panel.classList.add('active')
    cog.style.transform = `translateY(-100%)`
    cog.style.opacity = `0`
});

x.addEventListener('click', function() {
    panel.classList.remove('active')
    cog.style.transform = `translateY(0%)`
    cog.style.opacity = `1`
});


// Stopwatch begin

const startBtn = document.querySelector('.start'),
      stHour = document.querySelector('.stHour'),
      stMin = document.querySelector('.stMin'),
      stSec = document.querySelector('.stSec');

startBtn.addEventListener('click', function(){
    
    if (this.innerHTML === "start") {
        this.innerHTML = "stop"
        this.style = `background-color: red`
        // this.style = `color: #fff`
        document.querySelector('.stopwatch__button').classList.add('active')
    }
    else if(this.innerHTML === "stop"){
        this.innerHTML = "reset"
        // this.style = `color: #fff`
        document.querySelector('.stopwatch__button').classList.add('reActive')
        this.style = `background-color: #0051ff`
    }
    else if(this.innerHTML === "reset"){
        this.innerHTML = "start"
        document.querySelector('.stopwatch__button').classList.remove('active')
        document.querySelector('.stopwatch__button').classList.remove('reActive')
        this.style = `background: #fff`
        document.querySelector('main.day-mode .start').style = `background: #8aafff`
    }
    // stopwatch()

});

function stopwatch() {
    
    if(startBtn.innerHTML === "stop"){
        stSec.innerHTML++
    }

    if(stSec.innerHTML > 59){
        stSec.innerHTML = 00
        stMin.innerHTML++
    }
    if(stMin.innerHTML > 59){
        stMin.innerHTML = 00
        stHour.innerHTML++
    }
    if(stHour.innerHTML > 24){
        stHour.innerHTML = 00
    }

    if(startBtn.innerHTML === "start"){

        stHour.innerHTML = 0
        stMin.innerHTML = 0
        stSec.innerHTML = 0
        
    }
    setTimeout(() => stopwatch(), 1000)

}
stopwatch()

// Day and Dark theme

const dark = document.querySelector(".dark");
const day = document.querySelector(".day");
const main = document.querySelector("main")

day.addEventListener('click', function() {
    
    main.classList.add("day-mode");
    main.classList.remove("dark-mode");
    
});

dark.addEventListener('click', function() {
    
    main.classList.add("dark-mode");
    main.classList.remove("day-mode");

});
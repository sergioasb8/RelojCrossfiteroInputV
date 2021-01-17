//Java Script - Reloj Crossfitero Amrap js
// Paula y Sergio 

// ------------    Variables   ----------------

// variables Amrap

let InputGet = document.getElementById('InputGet');
let TemporizadorAmrap = document.getElementById('TemporizadorAmrap');
let NumberAmrap = document.getElementById('NumberAmrap');
let BackToMenu = document.getElementById('BackToMenu');
let GoToCronometer = document.getElementById('GoToCronometer');
let GotoTabata = document.getElementById('GoToTabata');
let GoToForTime = document.getElementById('GoToForTime');
let GoToEmom = document.getElementById('GoToEmom');
let TotalAmrap = 0;
let AmrapCheck = false;
let AmrapInterval = 0;
let SecondAmrap = 0;
let MinuteAmrap = 0;

// sound variables
var TenSound = new Audio('../Sounds/ten.mp3');
var FiveSound = new Audio('../Sounds/five.mp3');
var ThreeSound = new Audio('../Sounds/three.mp3');
var TwoSound = new Audio('../Sounds/two.mp3');
var OneSound = new Audio('../Sounds/one.mp3');
var AlertSound = new Audio('../Sounds/Whistle.mp3');

init();

function init() {
    //  funciones Amrap
    BackToMenu.addEventListener('click', BackToMenuFunction);
    GoToCronometer.addEventListener('click', GoToCronometerFunction);
    GoToTabata.addEventListener('click', GoToTbataFunction);
    GoToForTime.addEventListener('click', GoToForTimeFunction);
    GoToEmom.addEventListener('click', GoToEmomFunction);
}

function StartAmrapFunction(){
    if (AmrapCheck == false) {
        TotalAmrap = InputGet.value;
        MinuteAmrap = TotalAmrap ;
    }
    if (AmrapCheck == false && TotalAmrap > 0){
        AmrapInterval = setInterval( function() {
            
            if(SecondAmrap == 0 && MinuteAmrap >= 1 ){
                SecondAmrap = 59;
                MinuteAmrap -= 1;
            }
            SecondAmrap -= 0.01;

            if (SecondAmrap<0){
                SecondAmrap = 59;
                MinuteAmrap -= 1;
                
            }                   
            if (MinuteAmrap < 9.5 && SecondAmrap < 9.5) {
                TemporizadorAmrap.innerHTML = "0" + MinuteAmrap + ":" + "0" + SecondAmrap.toFixed(0);
            }
            if (MinuteAmrap < 9.5 && SecondAmrap > 9.5) {
                TemporizadorAmrap.innerHTML = "0" + MinuteAmrap + ":"  + SecondAmrap.toFixed(0);
            }
            if (MinuteAmrap > 9.5 && SecondAmrap < 9.5) {
                TemporizadorAmrap.innerHTML = MinuteAmrap + ":"  + "0" + SecondAmrap.toFixed(0);
            }
            if (MinuteAmrap <= 0.5 && SecondAmrap <= 0.5) {
                AmrapCheck = false;
                clearInterval(AmrapInterval);
            }

            // adding sounds to the numbers 
            if(MinuteAmrap < 1) {
                if(SecondAmrap < 10.2 && SecondAmrap > 9.9) {
                    TenSound.play();
                }
                if(SecondAmrap < 5.2 && SecondAmrap > 4.9) {
                    FiveSound.play();
                }
                if(SecondAmrap < 3.2 && SecondAmrap > 2.9) {
                    ThreeSound.play();
                }
                if(SecondAmrap < 2.2 && SecondAmrap > 1.9) {
                    TwoSound.play();
                }
                if(SecondAmrap < 1.2 && SecondAmrap > 0.9) {
                    OneSound.play();
                }
                if(SecondAmrap < 0.5 && MinuteAmrap < 1) {
                    AlertSound.play();
                }
            }
            

            //TemporizadorAmrap.innerHTML = MinuteAmrap +":" + SecondAmrap.toFixed(0);
        }, 10);
        AmrapCheck=true;
    }
}

function ResetAmrapFunction() {
    MinuteAmrap = 0;
    SecondAmrap = 0;
    AmrapCheck = false;
    TemporizadorAmrap.innerHTML = "00:00";
    clearInterval(AmrapInterval);
    InputGet.value = '00';
}

function StopAmrapFunction() {
    if ( AmrapCheck == true){
        AmrapCheck = false;
    }
    clearInterval( AmrapInterval);
}

function BackToMenuFunction() {
    location.replace('../index.html')
}
function GoToCronometerFunction() {
    location.replace('../OtherHtml/Cronometer.html')
}

function GoToTbataFunction() {
    location.replace('../OtherHtml/Tabata.html')
}

function GoToForTimeFunction() {
    location.replace('../OtherHtml/ForTime.html')
}

function GoToEmomFunction() {
    location.replace('../OtherHtml/Emom.html')
}
//Java Script - Reloj Crossfitero - For Time js
// Paula y Sergio 

//   variables 

let ForTimeClock = document.getElementById('ForTimeClock');
let TotalForTime = 0;
let InputGet = document.getElementById('InputGet');
let BackToMenu = document.getElementById('BackToMenu');
let GoToCronometer = document.getElementById('GoToCronometer');
let GotoTabata = document.getElementById('GoToTabata');
let GoToEmom = document.getElementById('GoToEmom');
let GoToAmrap = document.getElementById('GoToAmrap');
let HourFT = 0, MinuteFT = 0, SecondsFT = 0;
let intervaloFT = 0;
let verificadorFT = false;
let MinuteFTMinusOne = 0;

// sound variables
var TenSound = new Audio('../Sounds/ten.mp3');
var FiveSound = new Audio('../Sounds/five.mp3');
var ThreeSound = new Audio('../Sounds/three.mp3');
var TwoSound = new Audio('../Sounds/two.mp3');
var OneSound = new Audio('../Sounds/one.mp3');
var AlertSound = new Audio('../Sounds/Whistle.mp3');

init();

function init() {

    BackToMenu.addEventListener('click', BackToMenuFunction);
    GoToCronometer.addEventListener('click', GoToCronometerFunction);
    GoToTabata.addEventListener('click', GoToTbataFunction);
    GoToEmom.addEventListener('click', GoToEmomFunction);
    GoToAmrap.addEventListener('click', GoToAmrapFunction);
}

//---------------------------------------------------//
//                    For Time                       //
//---------------------------------------------------// 

function StartCounterForTime() {
    TotalForTime = InputGet.value;
    if (verificadorFT == false && TotalForTime > 0) {                             
        intervaloFT = setInterval(function () {               
            SecondsFT += 0.01;

            if(SecondsFT >= 59) {
                SecondsFT = 0;
                MinuteFT += 1;
            }
            if(MinuteFT >= 59 && SecondsFT >= 59) {
                MinuteFT = 0; 
                SecondsFT = 0;
                HourFT +=1;
            }
            if(TotalForTime > MinuteFT) {                   //while the Fortime cronometer is less than the total
                if(SecondsFT < 10 && MinuteFT < 10) {
                    ForTimeClock.innerHTML = '0'+MinuteFT+':'+'0'+SecondsFT.toFixed(0);
                }
                if(SecondsFT > 9.5 && MinuteFT < 10) {
                    ForTimeClock.innerHTML = '0'+MinuteFT+':'+SecondsFT.toFixed(0);
                }
                if(SecondsFT < 10 && MinuteFT > 9.5) {
                    ForTimeClock.innerHTML = MinuteFT+':'+'0'+SecondsFT.toFixed(0);
                }
            }

            if (TotalForTime <= MinuteFT) {                                          //when the ForTime cronometer is equal to the total
                if (verificadorFT = true) {
                    verificadorFT = false;
                    clearInterval(intervaloFT);             //stop the counter
                    if (TotalForTime> 9.5) {                //making the screen look good by adding 00 and :
                        ForTimeClock.innerHTML = TotalForTime + ':00';
                    }
                    else {
                        ForTimeClock.innerHTML = '0' + TotalForTime + ':00';
                    }
                    
                }
            }
            
            MinuteFTMinusOne = TotalForTime - 1;
            
            // adding sounds to the numbers 
            if(MinuteFT == MinuteFTMinusOne && SecondsFT > 49.9 && SecondsFT < 50.2) {
                TenSound.play();
            }
            if(MinuteFT == MinuteFTMinusOne && SecondsFT > 54.9 && SecondsFT < 55.2) {
                FiveSound.play();
            }
            if(MinuteFT == MinuteFTMinusOne && SecondsFT > 56.9 && SecondsFT < 57.2) {
                ThreeSound.play();
            }
            if(MinuteFT == MinuteFTMinusOne && SecondsFT > 57.9 && SecondsFT < 58.2) {
                TwoSound.play();
            }
            //if(MinuteFT == MinuteFTMinusOne && SecondsFT > 58.9 && SecondsFT < 59.2) {
                //OneSound.play();
            //}
            if(MinuteFT == TotalForTime) {
                AlertSound.play();
            }

        }, 10);
        verificadorFT = true;                                 //change verifier to tell the count begin
    } 
  
}

function ResetCounterFortime() {
    verificadorFT = false;
    SecondsFT = 0;
    MinuteFT = 0;
    HourFT = 0;
    ForTimeClock.innerHTML = '0' + MinuteFT + ':' + '0' + SecondsFT;
    clearInterval(intervaloFT);
    InputGet.value = '00';
}

function StopCounterForTime() {
    if (verificadorFT == true){
        verificadorFT = false;
    }
    clearInterval(intervaloFT);
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

function GoToEmomFunction() {
    location.replace('../OtherHtml/Emom.html')
}

function GoToAmrapFunction() {
    location.replace('../OtherHtml/Amrap.html')
}

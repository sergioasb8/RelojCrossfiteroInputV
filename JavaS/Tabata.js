//Java Script - Reloj Crossfitero Tabata js
// Paula y Sergio 

// ------------    Variables   ----------------

let InputGetRounds = document.getElementById('InputGetRounds');
let InputGetWork = document.getElementById('InputGetWork');
let InputGetRest = document.getElementById('InputGetRest');
let BackToMenu = document.getElementById('BackToMenu');
let GoToCronometer = document.getElementById('GoToCronometer');
let GoToForTime = document.getElementById('GoToForTime');
let GoToEmom = document.getElementById('GoToEmom');
let GoToAmrap = document.getElementById('GoToAmrap');

let TotalTabataRounds = 0;
let TotalWorkSeconds = 0;
let TotalRestSeconds = 0;
let verificadorT = false;
let intervaloT = 0;
let RoundsT = 0;
let SecondsTR= 0;
let SecondsTW = 0;
let IniciarRest = false;

// sound variables
var FiveSound = new Audio('../Sounds/five.mp3');
var AlertSound = new Audio('../Sounds/Whistle.mp3');

init();

function init() {
    BackToMenu.addEventListener('click', BackToMenuFunction);
    GoToCronometer.addEventListener('click', GoToCronometerFunction);
    GoToForTime.addEventListener('click', GoToForTimeFunction);
    GoToEmom.addEventListener('click', GoToEmomFunction);
    GoToAmrap.addEventListener('click', GoToAmrapFunction);
}

//----------------------------------------------//
//                   Funciones                  //
//----------------------------------------------//

//          Start Stop Reset functions

function StartTabataFunction() {
    TotalWorkSeconds = InputGetWork.value;
    TotalRestSeconds = InputGetRest.value;
    TotalTabataRounds = InputGetRounds.value;

    if (verificadorT == false) {                             
        intervaloT = setInterval(function () {               
            
            if(SecondsTW < TotalWorkSeconds) {                      // Runing seconds to work
                SecondsTW += 0.01;
                if(SecondsTW < 9.5) {                                // making seconds look good
                    TabataWork.innerHTML = '0' + SecondsTW.toFixed(0);
                }
                else {
                    TabataWork.innerHTML = SecondsTW.toFixed(0);
                }

                if(SecondsTW >= TotalWorkSeconds) {                 // when seconds to work are done then
                    IniciarRest = true;                             // send signal to start seconds to rest
                }
                
            }

            if(SecondsTW > TotalWorkSeconds - 5.1 && SecondsTW < TotalWorkSeconds - 4.8) {
                FiveSound.play();
            }
            if(SecondsTW > TotalWorkSeconds - 0.3 && SecondsTW < TotalWorkSeconds - 0.1) {
                AlertSound.play();
            }

            if (IniciarRest == true) {                              // Runing seconds of rest
                SecondsTR += 0.01;
                if(SecondsTR < 9.5) {                                // making seconds look good
                    TabataRest.innerHTML = '0' + SecondsTR.toFixed(0);
                }
                else {
                    TabataRest.innerHTML = SecondsTR.toFixed(0);
                }

                if(SecondsTR >= TotalRestSeconds) {                 // when seconds to rest are done then
                    IniciarRest = false;                            // Change signal to stop runing sec to rest
                    SecondsTW = 0;                                  // Set all seconds to 0 
                    SecondsTR = 0;                                  // adding one to rounds
                    RoundsT += 1;
                    TabataRest.innerHTML = '0' + SecondsTR;         // making seconds look good
                    TabataWork.innerHTML = '0' + SecondsTW;

                    if(RoundsT < 10) {
                        TabataRounds.innerHTML = '0' + RoundsT;
                    }
                    else {
                        TabataRounds.innerHTML = RoundsT;
                    }

                    if(RoundsT == TotalTabataRounds) {
                        clearInterval(intervaloT);                  //Stop the cronometer cause time is over
                    }
                }
            }
            if(SecondsTR > TotalRestSeconds - 5.1 && SecondsTR < TotalRestSeconds - 4.8) {
                FiveSound.play();
            }

            if(SecondsTR > TotalRestSeconds - 0.3 && SecondsTR < TotalRestSeconds - 0.1){
                AlertSound.play();
            }

            if(RoundsT == TotalTabataRounds) {
                AlertSound.play();
            }
        }, 10);
        verificadorT = true;                                 //change verifier to avoid the count to begin again
    } 
  
}

function StopTabataFunction() {
    if (verificadorT == true){
        verificadorT = false;
    }
    clearInterval(intervaloT);
}

function ResetTabataFunction() {
    verificadorT = false;
    IniciarRest = false;
    SecondsTR = 0;
    SecondsTW = 0;
    RoundsT = 0;
    TabataRest.innerHTML = '0' + SecondsTR;         
    TabataWork.innerHTML = '0' + SecondsTW;
    TabataRounds.innerHTML = '0' + RoundsT;
    clearInterval(intervaloT);
    InputGetWork.value = '00';
    InputGetRest.value = '00';
    InputGetRounds.value = '00';
}

function BackToMenuFunction() {
    location.replace('../index.html');
}
function GoToCronometerFunction() {
    location.replace('../OtherHtml/Cronometer.html')
}

function GoToForTimeFunction() {
    location.replace('../OtherHtml/ForTime.html')
}

function GoToEmomFunction() {
    location.replace('../OtherHtml/Emom.html')
}

function GoToAmrapFunction() {
    location.replace('../OtherHtml/Amrap.html')
}
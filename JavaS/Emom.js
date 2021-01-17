//Java Script - Reloj Crossfitero Emom js
// Paula y Sergio 

// ------------    Variables   ----------------
let BackToMenu = document.getElementById('BackToMenu');
let InputGetRounds = document.getElementById('InputGetRounds');
let InputGetWork = document.getElementById('InputGetWork');
let InputGetRest = document.getElementById('InputGetRest');
let GoToCronometer = document.getElementById('GoToCronometer');
let GotoTabata = document.getElementById('GoToTabata');
let GoToForTime = document.getElementById('GoToForTime');
let GoToAmrap = document.getElementById('GoToAmrap');

let TotalEmomRounds = 0;
let TotalEmomMinutes = 0;
let TotalEmomRest = 0;
let MinutesEmomWork = 0;
let SecondsEmomWork = 0;
let MinutesEmomRest = 0;
let SecondsEmomRest = 0;
let RestBegin = false;
let EmomRoundsCounter = 0;
let IntervaloEmom = 0;
let VerificadorEmom = false;

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
    GoToForTime.addEventListener('click', GoToForTimeFunction);
    GoToAmrap.addEventListener('click', GoToAmrapFunction);
}
//----------------------------------------------//
//                   Funciones                  //
//----------------------------------------------//

//          Start Stop Reset functions

function StartEmomFunction() {
    TotalEmomMinutes = InputGetWork.value;
    TotalEmomRest = InputGetRest.value;
    TotalEmomRounds = InputGetRounds.value;

    if (VerificadorEmom == false) {                             
        IntervaloEmom= setInterval(function () {               
            
            if(MinutesEmomWork < TotalEmomMinutes) {                      // Runing minutes to work
                SecondsEmomWork += 0.01;

                if(SecondsEmomWork >= 59) {
                    SecondsEmomWork = 0;
                    MinutesEmomWork += 1;
                }
                
                if(SecondsEmomWork < 10 && MinutesEmomWork < 10) {      // Making everything looks good
                    EmomWork.innerHTML = '0'+MinutesEmomWork+':'+'0'+SecondsEmomWork.toFixed(0);
                }
                if(SecondsEmomWork > 9.5 && MinutesEmomWork < 10) {
                    EmomWork.innerHTML = '0'+MinutesEmomWork+':'+SecondsEmomWork.toFixed(0);
                }
                if(SecondsEmomWork < 10 && MinutesEmomWork > 9.5) {
                    EmomWork.innerHTML = MinutesEmomWork+':'+'0'+SecondsEmomWork.toFixed(0);
                }

                if(MinutesEmomWork >= TotalEmomMinutes) {                 // when minutes to work are done then
                    RestBegin = true;                             // send signal to start minutes to rest
                }
                
            }

            // adding sounds to the numbers 
            if(SecondsEmomWork > 49.9 && SecondsEmomWork < 50.2) {
                TenSound.play();
            }
            if(SecondsEmomWork > 54.9 && SecondsEmomWork < 55.2) {
                FiveSound.play();
            }
            if(SecondsEmomWork > 56.9 && SecondsEmomWork < 57.2) {
                ThreeSound.play();
            }
            if(SecondsEmomWork > 57.9 && SecondsEmomWork < 58.2) {
                TwoSound.play();
            }
            if(SecondsEmomWork > 58.9 && SecondsEmomWork < 59.2) {
                OneSound.play();
            }
           

            if (RestBegin == true) {                              // Runing seconds of rest
                SecondsEmomRest += 0.01;

                if(SecondsEmomRest >= 59) {
                    SecondsEmomRest = 0;
                    MinutesEmomRest += 1;
                }

                if(SecondsEmomRest < 10 && MinutesEmomRest < 10) {      // Making everything looks good
                    EmomRest.innerHTML = '0'+MinutesEmomRest+':'+'0'+SecondsEmomRest.toFixed(0);
                }
                if(SecondsEmomRest > 9.5 && MinutesEmomRest < 10) {
                    EmomRest.innerHTML = '0'+MinutesEmomRest+':'+SecondsEmomRest.toFixed(0);
                }
                if(SecondsEmomRest < 10 && MinutesEmomRest > 9.5) {
                    EmomRest.innerHTML = MinutesEmomRest+':'+'0'+SecondsEmomRest.toFixed(0);
                }

                if(MinutesEmomRest >= TotalEmomRest) {              // when seconds to rest are done then
                    RestBegin = false;                              // Change signal to stop runing sec to rest
                    MinutesEmomWork = 0;
                    SecondsEmomWork = 0;
                    MinutesEmomRest = 0;
                    SecondsEmomRest = 0;                             
                    EmomRoundsCounter += 1;                               // adding one to rounds
                    EmomRest.innerHTML = '00:00';         // making seconds look good
                    EmomWork.innerHTML = '00:00';

                    if(EmomRoundsCounter < 10) {
                        EmomRounds.innerHTML = '0' + EmomRoundsCounter;
                    }
                    else {
                        EmomRounds.innerHTML = EmomRoundsCounter;
                    }

                    if(EmomRoundsCounter == TotalEmomRounds) {
                        clearInterval(IntervaloEmom);                  //Stop the cronometer cause time is over
                    }
                }
            }

            // adding sounds to the numbers 
            if(SecondsEmomRest > 49.9 && SecondsEmomRest < 50.2) {
                TenSound.play();
            }
            if(SecondsEmomRest > 54.9 && SecondsEmomRest < 55.2) {
                FiveSound.play();
            }
            if(SecondsEmomRest > 56.9 && SecondsEmomRest < 57.2) {
                ThreeSound.play();
            }
            if(SecondsEmomRest > 57.9 && SecondsEmomRest < 58.2) {
                TwoSound.play();
            }
            if(SecondsEmomRest > 58.9 && SecondsEmomRest < 59.2) {
                OneSound.play();
            }
            if(EmomRoundsCounter == TotalEmomRounds) {
                AlertSound.play();
            }

        }, 10);
        VerificadorEmom = true;                                 //change verifier to avoid the count to begin again
    } 
}

function StopEmomFunction() {
    if (VerificadorEmom == true){
        VerificadorEmom = false;
    }
    clearInterval(IntervaloEmom);
}

function ResetEmomFunction() {
    VerificadorEmom = false;
    RestBegin = false;
    MinutesEmomWork = 0;
    SecondsEmomWork = 0;
    MinutesEmomRest = 0;
    SecondsEmomRest = 0; 
    EmomRoundsCounter = 0;
    EmomRest.innerHTML = '00:00';         
    EmomWork.innerHTML = '00:00';
    EmomRounds.innerHTML = '00';
    clearInterval(IntervaloEmom);
    InputGetWork.value = '00';
    InputGetRest.value = '00';
    InputGetRounds.value = '00';
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

function GoToAmrapFunction() {
    location.replace('../OtherHtml/Amrap.html')
}
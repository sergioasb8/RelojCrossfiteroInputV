//Java Script - Reloj Crossfitero - Cronometer
// Paula y Sergio 

//   variables 
let temporizador = document.getElementById('temporizador');
let Start = document.getElementById('Start');
let Stop = document.getElementById('Stop');
let Reset = document.getElementById('Reset');
let Erase = document.getElementById('Erase');
let RecordTime = document.getElementById('Record');
let BackToMenu = document.getElementById('BackToMenu');
let GotoTabata = document.getElementById('GoToTabata');
let GoToForTime = document.getElementById('GoToForTime');
let GoToEmom = document.getElementById('GoToEmom');
let GoToAmrap = document.getElementById('GoToAmrap');
let Hour = 0, Minute = 0, Seconds = 0;
let intervalo = 0;
let verificador = false;

init();

function init() {

    // funciones cronometer
    Start.addEventListener('click', StartCounter);
    Stop.addEventListener('click', StopCounter);
    Reset.addEventListener('click', ResetCounter);
    Erase.addEventListener('click', EraseRecords);
    RecordTime.addEventListener('click', RecordTimeCounter);
    BackToMenu.addEventListener('click', BackToMenuFunction);
    GoToTabata.addEventListener('click', GoToTbataFunction);
    GoToForTime.addEventListener('click', GoToForTimeFunction);
    GoToEmom.addEventListener('click', GoToEmomFunction);
    GoToAmrap.addEventListener('click', GoToAmrapFunction);
}


//---------------------------------------------------//
//                Cronometer                         //
//---------------------------------------------------//


function StartCounter() {                                   //cronometer start
    if (verificador == false) {                             //verify count is stop
        intervalo = setInterval(function () {               //definy how time is going to advance
            Seconds += 0.01;
                    
            if(Seconds >= 59) {                             // condition to increase minute
                Seconds = 0;
                Minute += 1;
            }
            if(Minute >= 59 && Seconds >= 59) {             // condition to increase hour
                Minute = 0; 
                Seconds = 0;
                Hour +=1;
            }
                                                            //making temporizer looks good on screen
            if(Seconds < 10 && Minute < 10 && Hour < 10) {
                temporizador.innerHTML = '0'+Hour+':'+'0'+Minute+':'+'0'+Seconds.toFixed(0);
            }
            if(Seconds > 9.5 && Minute < 10 && Hour < 10) {
                temporizador.innerHTML = '0'+Hour+':'+'0'+Minute+':'+Seconds.toFixed(0);
            }
            if(Seconds < 10 && Minute > 9.5 && Hour < 10) {
                temporizador.innerHTML = '0'+Hour+':'+Minute+':'+'0'+Seconds.toFixed(0);
            }
                        
        }, 10);
        verificador = true;                                 //change verifier to tell the count begin
    } 
  
}

function StopCounter() {                                    //stop the cronometer
    if (verificador = true) {                               // change verificador to false so later we can use start
        verificador = false;
        clearInterval(intervalo);                           //method to stop the cronometer
    }
}
function ResetCounter() {                                   //reset the counter 
    verificador = false;                                    // change verificador to false so later we can use start
    Seconds = 0;                                            // sets all the variable to 0 so they start the count again
    Minute = 0;
    Hour = 0;
    temporizador.innerHTML = '0'+Hour+':'+'0'+Minute+':'+'0'+Seconds.toFixed(0);
    clearInterval(intervalo);                               //method to stop the cronometer
}

function EraseRecords() {                                   // erase the records 
    while(almacenarTiempos.firstChild) {                    // si hay un record saved erase the record
        almacenarTiempos.removeChild(almacenarTiempos.firstChild)
    }
}
function RecordTimeCounter() {                              //Function to record the actual time on the cronometer
    let p = document.createElement('ul');                   //create an element (list)
    if(Seconds < 10 && Minute < 10 && Hour < 10) {          //make the records look good
        p.innerHTML = `                                     
        <li>Tiempo : ${'0'+Hour+':'+'0'+Minute+':'+'0'+Seconds.toFixed(0)}</li>
    `;                                                      //  `` is used to convert everything to string
    }

    if(Seconds >= 10 && Minute < 10 && Hour < 10) {
        p.innerHTML = `
        <li>Tiempo : ${'0'+Hour+':'+'0'+Minute+':'+Seconds.toFixed(0)}</li>
    `;
    }

    if(Seconds < 10 && Minute >= 10 && Hour < 10) {
        p.innerHTML = `
        <li>Tiempo : ${'0'+Hour+':'+Minute+':'+'0'+Seconds.toFixed(0)}</li>
    `;
    }
    almacenarTiempos.appendChild(p);                        //Add the actual record to the list and show it to the screen 
}



function BackToMenuFunction() {
    location.replace('../index.html')
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

function GoToAmrapFunction() {
    location.replace('../OtherHtml/Amrap.html')
}

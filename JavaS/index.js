//Java Script - Reloj Crossfitero 
// Paula y Sergio 

// ------------    Variables   ----------------

let Cronometer = document.getElementById('Cronometer');
let Tabata = document.getElementById('Tabata');
let ForTime = document.getElementById('ForTime');
let Emom = document.getElementById('Emom');
let amrap = document.getElementById('Amrap');
let CronometerTitle = document.getElementById('CronometerTitle');
let TabataTitle = document.getElementById('TabataTitle');
let ForTimeTitle = document.getElementById('ForTimeTitle');
let EmomTitle = document.getElementById('EmomTitle');
let AmrapTitle = document.getElementById('AmrapTitle');

init()

// function init
function init() {
    Cronometer.addEventListener('click', OpenCronometer);
    Tabata.addEventListener('click', OpenTabata);
    ForTime.addEventListener('click', OpenForTime);
    Emom.addEventListener('click', OpenEmom);
    amrap.addEventListener('click', OpenAmrap);
    CronometerTitle.addEventListener('click',OpenCronometer);
    TabataTitle.addEventListener('click',OpenTabata);
    ForTimeTitle.addEventListener('click',OpenForTime);
    EmomTitle.addEventListener('click',OpenEmom);
    AmrapTitle.addEventListener('click',OpenAmrap);
}

//functions
function OpenCronometer () {
    location.replace('OtherHtml/Cronometer.html');
}

function OpenTabata () {
    location.replace('OtherHtml/Tabata.html');
}

function OpenForTime() {
    location.replace('OtherHtml/ForTime.html');
}

function OpenEmom() {
    location.replace('OtherHtml/Emom.html');
}

function OpenAmrap() {
    location.replace('OtherHtml/Amrap.html');
}


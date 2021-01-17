/*variables */
let MenuToggle = document.querySelector('.menu-toggle')
let MenuToggleIcon = document.querySelector('.menu-toggle i')
let Menu = document.getElementById('menu')

/*esto hace que se despliege el menu cono responsive */
MenuToggle.addEventListener('click', e=>{
    Menu.classList.toggle('show');

    /*esto hace que cambie el icono */

    if(Menu.classList.contains('show')){
        MenuToggleIcon.setAttribute('class', 'fa fa-times');
    }
    else{
        MenuToggleIcon.setAttribute('class', 'fa fa-bars');
    }
})

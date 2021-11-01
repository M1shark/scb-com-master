// DESKTOP HEADER MENU OPEN AND CLOSE
const openMenu = document.querySelector('.header__menu__img-open').onclick = open;
const menu = document.querySelector('.header__window-menu');
function open(){
    menu.classList.toggle('windows-close')
}
// RECORDS BLOCK OFF SUB MENU
const rollUp = document.querySelector('.records__menu-close').onclick = rollUpMenu;
const subMenu = document.querySelector('.records__submenu');
function rollUpMenu() {
    subMenu.classList.toggle('records__close');
}
// ACARRDION POST ANSWERS
const openAcc = document.querySelectorAll('.post__click');
openAcc.forEach(function(el, index) {
    el.addEventListener('click', function(ev){
        const item = document.getElementById(index);
        item.classList.toggle("panel__block");
        })
    })

    // ACARDION MODULES
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("link__hover-none");
    let uncover = this.nextElementSibling;
    if (uncover.style.maxHeight){
        uncover.style.maxHeight = null;
    } else {
        uncover.style.maxHeight = uncover.scrollHeight + "px";
    } 

  });
}
// mobile menu
const mediaQuery = window.matchMedia('(max-width: 535px)');
if (mediaQuery.matches) {
    const burger = document.querySelector('.header-mobile').onclick = navigationCLose;
    const nav = document.querySelector('.nav');
    function navigationCLose() {
        nav.classList.toggle('nav-close')
    }
}


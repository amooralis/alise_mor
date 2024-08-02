
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*==================== REMOVE MENU MOBILE ====================*/

const navLink=document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(l => l.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(let i = 0; i < skillsContent.length; i++){
        skillsContent[i].classList = 'skills__content skills__close';
    }

    if (itemClass ==='skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((h)=> {
    h.addEventListener('click', toggleSkills);
})

/*==================== QUALIFICATION TABS ====================*/

// const tabs = document.querySelectorAll('[data-target]');
// const tabsContents = document.querySelectorAll('[data-content]');
//
// tabs.forEach((tab)=> {
//     tab.addEventListener('click', ()=>{
//         const target = document.querySelector(tab.dataset.target);
//
//         tabsContents.forEach((content)=> content.classList.remove('qualification__active'));
//         target.classList.add('qualification__active');
//
//         tabs.forEach((tab)=> tab.classList.remove('qualification__active'));
//         tab.classList.add('qualification__active');
//
//
//     })
// })




/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/
var swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/


/*==================== SHOW SCROLL UP ====================*/


/*==================== DARK LIGHT THEME ====================*/





// window.addEventListener('blur',()=>{
//     document.title = 'Вернитесь 🥲'
// })
//
// window.addEventListener('focus',()=>{
//     document.title = 'Морозова Алиса - Frontend-разработчик'
// })
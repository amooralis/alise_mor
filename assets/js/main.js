const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');


/*===== MENU SHOW =====*/
/* Validate if constant exists */

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


/*==================== REMOVE MENU MOBILE ====================*/

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(l => l.addEventListener('click', linkAction));

/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content');
const skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].classList = 'skills__content skills__close';
    }

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((h) => {
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


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY < (sectionTop + sectionHeight)) {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.add('active--link');
        } else {
            document.querySelector('.nav__menu a[href*="' + sectionId + '"]').classList.remove('active--link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


/*==================== CHANGE BACKGROUND HEADER ====================*/

function scrollHeader() {
    const nav = document.getElementById('header')
    if (this.scrollY >= 80) {
        nav.classList.add('scroll--header')
    } else {
        nav.classList.remove('scroll--header')
    }
}

window.addEventListener('scroll', scrollHeader);

/*==================== SHOW SCROLL UP ====================*/

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY > 500) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';


if (selectedTheme) {

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme);
}


document.body.classList.toggle(darkTheme);
themeButton.classList.add(iconTheme);


themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());

})

// window.addEventListener('blur',()=>{
//     document.title = 'Вернитесь 🥲'
// })
//
// window.addEventListener('focus',()=>{
//     document.title = 'Морозова Алиса - Frontend-разработчик'
// })
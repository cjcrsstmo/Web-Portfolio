//scroll event
// window.addEventListener("scroll", () => {
//     var header = this.document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })


const nav = document.querySelector('header')

let lastScroll = window.scrollY

window.addEventListener('scroll', () => {
    if (lastScroll < window.scrollY) {
    nav.classList.add('inactive')
        
    }else{
        nav.classList.remove('inactive')
        
    }
    lastScroll = window.scrollY
})


//media query
var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('#menu-btn');
var closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});



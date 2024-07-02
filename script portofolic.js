let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const  typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer'],
    typeSpeed: 50,
  });
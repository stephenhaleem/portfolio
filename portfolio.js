let menuicon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuicon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

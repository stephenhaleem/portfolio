document.addEventListener('DOMContentLoaded', ()=>{
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

console.log('menuIcon:', menuIcon);

if(menuIcon) {

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
};
} else {
    console.error('MenuIcon not found');
}
});
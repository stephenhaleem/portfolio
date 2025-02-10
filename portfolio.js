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
});document.addEventListener('DOMContentLoaded', ()=>{
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

var loader = document.getElementById("pre-loader");

window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.display = "none";
    }, 1500); // Change this time to delay the loading screen. 1000 milliseconds = 1 second. 5000 milliseconds = 5 seconds. 10000 milliseconds = 10 seconds. ect. 1000 milliseconds = 1 second. 5000 milliseconds = 5 seconds. 10000 milliseconds = 10 seconds. ect.
});
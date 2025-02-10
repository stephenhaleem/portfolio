const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

      if(navToggle){
        navToggle.addEventListener('click', () =>{
           navMenu.classList.add('show-menu')
        })
     }
     
     /* Menu hidden */
     if(navClose){
        navClose.addEventListener('click', () =>{
           navMenu.classList.remove('show-menu')
        })
     }
     

var loader = document.getElementById("pre-loader");

window.addEventListener("load", function() {
    setTimeout(function() {
        loader.style.display = "none";
    }, 2000); // Change this time to delay the loading screen. 1000 milliseconds = 1 second. 5000 milliseconds = 5 seconds. 10000 milliseconds = 10 seconds. ect. 1000 milliseconds = 1 second. 5000 milliseconds = 5 seconds. 10000 milliseconds = 10 seconds. ect.
});
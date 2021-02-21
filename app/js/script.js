console.log("Hello!");

var hamburger = document.querySelector(".hamburger");
var menu = document.querySelector(".menu");

hamburger.onclick = function() {
    hamburger.classList.toggle("open");
    menu.classList.toggle("open");
}

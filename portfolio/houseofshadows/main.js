// Get the navbar
var navbar = document.getElementById("myTopnav");

//========================
// Sticky nav bar
//========================

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scroll()};

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scroll() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//========================
// Mobile Nav Button
//========================

function navButton() {
    if (navbar.classList.contains ("responsive")) {
        navbar.classList.remove("responsive")
    } else {
        navbar.classList.add("responsive")
    }
}
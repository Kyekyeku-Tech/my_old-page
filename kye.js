// JavaScript for slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var textContent = document.getElementById("text-content");
        var positionFromTop = textContent.getBoundingClientRect().top;

        var screenHeight = window.innerHeight;

        if (positionFromTop - screenHeight <= 0) {
            textContent.classList.add("flip-in-x");
        } else {
            textContent.classList.remove("flip-in-x"); // Remove the class if the element is not in view
        }
    });
});


// Your existing JavaScript code
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", function() {
    var colorPicker = document.getElementById('colorPicker');

    colorPicker.addEventListener('change', function() {
        var selectedColor = colorPicker.value;

        // Set the background color of the header
        var header = document.querySelector('header');
        header.style.backgroundColor = selectedColor;

        // Set the background color of the footer
        var footer = document.querySelector('footer');
        footer.style.backgroundColor = selectedColor;
    });
});

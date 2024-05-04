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

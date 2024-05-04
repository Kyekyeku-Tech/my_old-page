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

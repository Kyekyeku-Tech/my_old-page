document.addEventListener('DOMContentLoaded', function() {
    // Selecting elements
    var htmlCodeInput = document.getElementById('htmlCode');
    var cssCodeInput = document.getElementById('cssCode');
    var jsCodeInput = document.getElementById('jscode');
    var resultFrame = document.getElementById('resultFrame');
    var runButton = document.getElementById('runButton');

    // Function to update the result frame
    function updateResult() {
        var htmlCode = htmlCodeInput.value;
        var cssCode = "<style>" + cssCodeInput.value + "</style>";
        var jsCode = "<script>" + jsCodeInput.value + "</script>";

        // Creating a new document to render the result
        var iframeDocument = resultFrame.contentDocument || resultFrame.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(htmlCode + cssCode);
        iframeDocument.write(jsCode);
        iframeDocument.close();
    }

    // Run button click event listener
    runButton.addEventListener('click', function() {
        updateResult();
    });

    // Initial update
    updateResult();
});

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
        
    });
});

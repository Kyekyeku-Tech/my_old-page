document.getElementById("htmlButton").addEventListener("click", function() {
    document.getElementById("htmlForm").style.display = "block";
    document.getElementById("cssForm").style.display = "none";
    document.getElementById("jsForm").style.display = "none";
});

document.getElementById("cssButton").addEventListener("click", function() {
    document.getElementById("htmlForm").style.display = "none";
    document.getElementById("cssForm").style.display = "block";
    document.getElementById("jsForm").style.display = "none";
});

document.getElementById("jsButton").addEventListener("click", function() {
    document.getElementById("htmlForm").style.display = "none";
    document.getElementById("cssForm").style.display = "none";
    document.getElementById("jsForm").style.display = "block";
});

document.getElementById("runButton").addEventListener("click", function() {
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = document.getElementById("cssCode").value;
    var jsCode = document.getElementById("jsCode").value;

    var resultFrame = document.getElementById("resultFrame").contentWindow.document;
    resultFrame.open();
    resultFrame.write('<style>' + cssCode + '</style>' + htmlCode + '<script>' + jsCode + '</script>');
    resultFrame.close();
});


const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
});
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
document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileContent = e.target.result;
            const fileType = file.name.split('.').pop().toLowerCase();
            
            if (fileType === 'html') {
                document.getElementById('htmlCode').value = fileContent;
                document.getElementById('htmlButton').click(); // Show HTML tab
            } else if (fileType === 'css') {
                document.getElementById('cssCode').value = fileContent;
                document.getElementById('cssButton').click(); // Show CSS tab
            } else if (fileType === 'js') {
                document.getElementById('jsCode').value = fileContent;
                document.getElementById('jsButton').click(); // Show JS tab
            } else {
                alert('Unsupported file type. Please upload an HTML, CSS, or JS file.');
            }
        }
        reader.readAsText(file);
    }
});
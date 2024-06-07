document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var form = event.target;
    var formData = new FormData(form);

    // Send form data to SheetMonkey
    fetch('https://api.sheetmonkey.io/form/s2tNaVG3kzyiw91cPx6AyC', {
        method: "POST",
        body: formData
    }).then(function(response) {
        if (response.ok) {
            // Capture the current time
            var currentTime = new Date();
            var formattedTime = currentTime.toLocaleString();

            // Display the submission time
            document.getElementById("submissionTime").textContent = "Form submitted at: " + formattedTime;

            // Redirect to the specified URL after displaying the time
            setTimeout(function() {
                window.location.href = "https://paystack.com/pay/afaagent";
            }, 3000);
        } else {
            alert("There was an error with your submission.");
        }
    }).catch(function(error) {
        console.error("Error:", error);
        alert("There was an error with your submission.");
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
});
var prices = {
    "0": 0,
    "1": 3.5,
    "2": 7,
    "3": 10,
    "4": 12,
    "5": 15,
    "6": 18,
    "7": 22,
    "8": 24,
    "10": 30,
    "12": 37,
    "15": 45,
    "20": 60,
    "25": 77,
    "40": 117,
    "50": 145
};

function updateAmount() {
    var bundleSelect = document.getElementById("bundle");
    var amountInput = document.getElementById("amount");
    var selectedValue = bundleSelect.value;

    if (selectedValue in prices) {
        amountInput.value = "GHS " + prices[selectedValue].toFixed(2);
    }
}

document.getElementById("paymentForm").addEventListener("submit", async function(event) {
    event.preventDefault();

    var form = event.target;
    var formData = new FormData(form);

    // Send form data to SheetMonkey
    fetch(form.action, {
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
                window.location.href = "https://paystack.com/pay/airteltigo";
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

document.querySelector('.menu-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
});
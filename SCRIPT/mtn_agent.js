var prices = {
    "0": 0,
    "1": 4.6,
    "2": 9,
    "3": 13.5,
    "4": 18,
    "5": 21.5,
    "6": 26,
    "7": 29,
    "8": 33,
    "10": 38.9,
    "12": 47.4,
    "15": 55,
    "20": 69,
    "25": 85,
    "50": 156,
    "100": 300,
    "200": 600
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
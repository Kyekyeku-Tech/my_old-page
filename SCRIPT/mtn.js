var prices = {
    "0": 0,
    "1": 6.2,
    "2": 12.2,
    "3": 18.3,
    "4": 24.4,
    "5": 30.5,
    "6": 36.5,
    "7": 42.5,
    "8": 48.5,
    "10": 54.6,
    "12": 63,
    "15": 79,
    "20": 95.8,
    "25": 125.8,
    "30": 134.6,
    "40": 189.5,
    "50": 203.5
};

function updateAmount() {
    var bundleSelect = document.getElementById("bundle");
    var amountInput = document.getElementById("amount");
    var selectedValue = bundleSelect.value;

    if (selectedValue in prices) {
        amountInput.value = "GHS " + prices[selectedValue].toFixed(2);
    }
}

document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var phoneNumber = document.getElementById("phoneNumber").value;
    var email = document.getElementById("email").value;
    var selectedBundle = document.getElementById("bundle").value;
    var amount = prices[selectedBundle] * 100; // Amount in pesewas

    var handler = PaystackPop.setup({
        key: 'pk_live_fb405d2702a00868ba424f73b9148b7aad07b2b0', // Replace with your public key
        email: email,
        amount: amount,
        currency: 'GHS',
        ref: 'KYEKYEKU-' + Math.floor((Math.random() * 1000000000) + 1),
        metadata: {
            custom_fields: [{
                display_name: "Phone Number",
                variable_name: "phone_number",
                value: phoneNumber
            }]
        },
        callback: function(response) {
            // Send form data to SheetMonkey
            var form = event.target;
            var formData = new FormData(form);

            fetch('https://api.sheetmonkey.io/form/s2tNaVG3kzyiw91cPx6AyC', {
                method: "POST",
                body: formData
            }).then(function(response) {
                if (response.ok) {
                    const currentTime = new Date();
                    const formattedTime = currentTime.toLocaleString();
                    document.getElementById("submissionTime").textContent = "Form submitted at: " + formattedTime;
                    Swal.fire('Payment Successful!', 'Best Regard Kyekyeku-tech');
                    sendSMS(phoneNumber, selectedBundle); // Call the function to send SMS after successful payment
                } else {
                    Swal.fire('Error', 'There was an error with your submission.', 'error');
                }
            }).catch(function(error) {
                console.error("Error:", error);
                Swal.fire('Error', 'There was an error with your submission.', 'error');
            });
        },
        onClose: function() {
            Swal.fire('Payment Cancelled', 'You closed the payment window.', 'info');
        }
    });
    handler.openIframe();
});

function sendSMS(phoneNumber, selectedBundle) {
    const packageNames = {
        "1": "1GB",
        "2": "2GB",
        "3": "3GB",
        "4": "4GB",
        "5": "5GB",
        "6": "6GB",
        "7": "7GB",
        "8": "8GB",
        "10": "10GB",
        "12": "12GB",
        "15": "15GB",
        "20": "25GB",
        "25": "20GB",
        "30": "30GB",
        "40": "40GB",
        "50": "50GB"
    };

    const package = packageNames[selectedBundle];

    fetch(`https://devp-sms03726-api.hubtel.com/v1/messages/send?clientid=janhcpit&clientsecret=pisvfpwz&from=KyekyekuTek&to=+233545454000&content=Someone Just Buy ${package} On ${phoneNumber} Kindly confirm`, {
        method: 'GET'
    })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error('Error sending SMS:', error));
}
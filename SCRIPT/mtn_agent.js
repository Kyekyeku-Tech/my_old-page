const prices = {
    "0": 0,
    "1": 5.2,
    "2": 10.5,
    "3": 15.3,
    "4": 20.4,
    "5": 24.5,
    "6": 29.5,
    "7": 34.5,
    "8": 39.5,
    "10": 45.6,
    "12": 57,
    "15": 67,
    "20": 88,
    "25": 105.8,
    "30": 126,
    "40": 179.5,
    "50": 199.5
};

const agentEmails = {
    "AFA1411": "safooppong121@gmail.com",
    "SAM2288": "sam.ebulley210@gmail.com",
    "ESK1196": "esko0896@gmail.com",
    "NFC2563": "nimohandy7@gmail.com",
    "AB5050": "abrahamkessey@gmail.com",
    "AY2080": "johnkessey66@gmail.com",
    "BO2013": "bernardoppong220@gmail.com",
    "MA2308": "maryaccomplish7@gmail.com",
    "FK3310": "fredrickkusi10@gmail.com",
    "AFA0710": "customer6@example.com",
    "AFA1720": "",
    "AFA7124": "",
    "AFA9803": "",
    "AFA9921": ""
};

document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const phoneNumber = document.getElementById("phoneNumber").value;
    const agentId = document.getElementById("agentId").value.toUpperCase();
    const selectedBundle = document.getElementById("bundle").value;
    const amount = prices[selectedBundle] * 100; // Amount in pesewas

    if (!(agentId in agentEmails) || agentEmails[agentId] === "") {
        Swal.fire('Error', 'Invalid or unregistered Agent ID.', 'error');
        return;
    }

    const email = agentEmails[agentId];

    const handler = PaystackPop.setup({
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
            const form = event.target;
            const formData = new FormData(form);

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

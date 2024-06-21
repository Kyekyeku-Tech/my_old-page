var agentEmails = {
    "AFA1411": "safooppong121@gmail.com",
    "SAM2288": "sam.ebulley210@gmail.com",
    "ESK1196": "esko0896@gmail.com",
    "NFC2563": "nimohandy7@gmail.com",
    "AB5050": "abrahamkessey@gmail.com",
    "AY2080": "johnkessey66@gmail.com",
    "BO2013": "bernardoppong220@gmail.com",
    "MA2308": "maryaccomplish7@gmail.com",
    "FK3310": "fredrickkusi10@gmail.com",
    "AR9041": "mutarurazak@gmail.com",
    "AFA1720": "",
    "AFA7124": "",
    "AFA9803": "",
    "AFA9921": ""
};

    document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var phoneNumber = document.getElementById("Phone_Number").value;
    var agentId = document.getElementById("agentId").value.toUpperCase(); 
    var amount = 7 * 100;// Amount in kobo

    if (!(agentId in agentEmails) || agentEmails[agentId] === "") {
        Swal.fire('Error', 'Invalid or unregistered Agent ID.', 'error');
        return;
    }

    var email = agentEmails[agentId];

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
                    // Capture the current time
                    var currentTime = new Date();
                    var formattedTime = currentTime.toLocaleString();

                    // Display the submission time
                    document.getElementById("submissionTime").textContent = "Form submitted at: " + formattedTime;

                    // Display success message
                    Swal.fire('Payment Successful!', 'Wait for form to submitted before u left');
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
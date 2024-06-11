document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var phoneNumber = document.getElementById("Phone_Number").value;
    var amount = 7.2 * 100; // Amount in kobo

    var handler = PaystackPop.setup({
        key: 'pk_live_fb405d2702a00868ba424f73b9148b7aad07b2b0', // Replace with your public key
        email: 'safooppong121@gmail.com',
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
                    // Show the success alert
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your payment has been received,thank you",
                        showConfirmButton: false,
                        timer: 2500
                    });

                    // Redirect to the specified URL after a delay
                    setTimeout(function() {
                        window.location.href = "";
                    }, 2000);
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'There was an error with your submission.'
                    });
                }
            }).catch(function(error) {
                console.error("Error:", error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'There was an error with your submission.'
                });
            });
        },
        onClose: function() {
            Swal.fire('Payment Cancelled', 'You closed the payment window.', 'info');
        }
    });
    handler.openIframe();
});

const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('open');
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
});
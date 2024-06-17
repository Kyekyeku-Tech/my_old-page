const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

function checkAccess() {
    var agentID = document.getElementById("agentID").value.toUpperCase(); // Convert to uppercase for case-insensitive comparison
    var allowedIDs = ["AFA1411", "SAM2288", "ESK1196", "NFC2563", "AB5050", "AY2080", "BO2013", "AFA2308", "AFA7009", "AFA0710", "AFA1720", "AFA7124", "AFA9803", "AFA9921"];
    var usernames = {
        "AFA1411": "OPPONG SAFO",
        "SAM2288": "SAMUEL EBULLEY",
        "ESK1196": "STEPHEN ESHUN",
        "NFC2563": "ANDY NIMOH",
        "AB5050": "ABRAHAM KESSEY",
        "AY2080": "AYISHATU ABDULLAI",
        "BO2013": "BERNARD OPPONG",
        "AFA2308": "",
        "AFA7009": "",
        "AFA0710": "",
        "AFA1720": "",
        "AFA7124": "",
        "AFA9803": "",
        "AFA9921": ""
    };
    if (allowedIDs.includes(agentID)) {
        var username = usernames[agentID];

        Swal.fire({
            icon: 'success',
            title: 'Welcome!',
            text: "" + username + ", you're an Agent! Enjoy the best prices.",
            showConfirmButton: false,
            timer: 3500
        }).then(() => {
            window.location.href = "afa_agent.html"; // Redirect to the link after SweetAlert closes
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Access Denied',
            text: 'Invalid Agent ID. Access denied.'
        });
    }
}

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    var form = event.target;
    var formData = new FormData(form);

    // Send form data to SheetMonkey
    fetch('https://api.sheetmonkey.io/form/s2tNaVG3kzyiw91cPx6AyC', {
        method: "POST",
        body: formData
    }).then(function(response) {
        if (response.ok) {
            // Redirect to the specified URL after submission
            window.location.href = "https://paystack.com/pay/agentlink";
        } else {
            alert("There was an error with your submission.");
        }
    }).catch(function(error) {
        console.error("Error:", error);
        alert("There was an error with your submission.");
    });
});
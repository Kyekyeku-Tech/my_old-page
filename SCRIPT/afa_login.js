function checkAccess() {
    var agentID = document.getElementById("agentID").value.toUpperCase(); // Convert to uppercase for case-insensitive comparison
    var allowedIDs = ["AFA1411", "SAM2288", "AFA7103", "AFA0064", "AFA0915", "AFA8106", "AFA0907", "AFA2308", "AFA7009", "AFA0710", "AFA1720", "AFA7124", "AFA9803", "AFA9921"];
    var usernames = {
        "AFA1411": "OPPONG SAFO",
        "SAM2288": "SAMUEL EBULLEY",
        "AFA7103": "",
        "AFA0064": "",
        "AFA0915": "",
        "AFA8106": "",
        "AFA0907": "",
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

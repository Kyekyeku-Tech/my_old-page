function checkAccess() {
    var agentID = document.getElementById("agentID").value.toUpperCase(); // Convert to uppercase for case-insensitive comparison
    var allowedIDs = ["AFA1411", "AFA0253", "AFA7103", "AFA0064", "AFA0915", "AFA8106", "AFA0907", "AFA2308", "AFA7009", "AFA0710", "AFA1720", "AFA7124", "AFA9803", "AFA9921"];
    var usernames = {
        "AFA1411": "OPPONG SAFO",
        "AFA0253": "NEW AGENT",
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
        
                alert("Welcome !! " + username + ", you're an Agent! Enjoy the best prices.");
                window.location.href = "agent_mtn.html"; // Redirect to the link
            } else {
                alert("Invalid Agent ID. Access denied.");
            }
          };
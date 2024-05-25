const validCredentials = [
    { username: 'esko0896@gmail.com', password: 'Esko089611' },
    { username: 'abrahamkessey@gmail.com', password: '5050' },
    { username: 'yamoahgodfred34@gmail.com', password: 'godfred333' },
    { username: 'user1@example.com', password: 'password1' },
    { username: 'user3@example.com', password: 'password3' },
    { username: 'user4@example.com', password: 'password4' },
    { username: 'safo.oppong@hotmail.com', password: 'Oppong1' }
  ];

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const isValid = validCredentials.some(cred => cred.username === username && cred.password === password);
    
    if (isValid) {
      window.location.href = 'agent_mtn.html';
    } else {
      alert('Incorrect credentials, please wait for approval.');
    }
  });
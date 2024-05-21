const validCredentials = [
    { username: 'user1@example.com', password: 'password1' },
    { username: 'abrahamkessey@gmail.com', password: '5050' },
    { username: 'user3@example.com', password: 'password3' },
    { username: 'safo.oppong@hotmail.com', password: 'Oppong1' }
  ];

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    const isValid = validCredentials.some(cred => cred.username === username && cred.password === password);
    
    if (isValid) {
      window.location.href = 'tigo_agent.html';
    } else {
      alert('Incorrect credentials, please wait for approval.');
    }
  });
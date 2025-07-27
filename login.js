document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const usernameDisplay = document.getElementById('usernameDisplay');
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');

  if (currentUser) {
      
      usernameDisplay.textContent = currentUser.username;
      loginBtn.style.display = 'none';
      logoutBtn.style.display = 'inline-block';
  }

  
  logoutBtn.addEventListener('click', () => {
      localStorage.removeItem('currentUser');
      window.location.reload(); 
  });
});


function onregister(event) {
    event.preventDefault(); 
  
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    
    const accounts = JSON.parse(localStorage.getItem('accounts')) || [];
  
    if (accounts.some(acc => acc.username === username)) {
      alert("Bele isdifadeci var!");
      return;
    }
  

    const newUser = { name, surname, email, username, password };

    accounts.push(newUser);
    localStorage.setItem('accounts', JSON.stringify(accounts));
  

    localStorage.setItem('currentUser', JSON.stringify(newUser));
alert("Hesab yaradildi!")  
    window.location.href = 'login.html';
  }



fetch("http://localhost:5000/api/register", {
  method: "POST",

  
  headers: {
      "Content-Type": "application/json"
  },

  
  body: JSON.stringify(newUser)
})

.then(res => {

  if (!res.ok) throw new Error("Error!");
  

  return res.json();
})
.then(data => {

alert("Hesab yaradildi!")
  
  localStorage.setItem("currentUser", JSON.stringify(data));

  
  window.location.href = "Login.html";
})

.catch(error => {
  alert("Xeta: " + error.message);
});










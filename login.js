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

let form = document.getElementById("forms")
form.addEventListener("submit", onregister)

function onregister(event) {
  event.preventDefault();

  const loginUser = {};

  let formData = new FormData(event.target)

  for (const [key, value] of formData.entries()) {
    loginUser[key] = value
  }


  fetch("http://195.26.245.5:9505/api/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginUser)
  })
    .then(res => {
      if (!res.ok) throw new Error("Error!");
      return res.json();
    })
    .then(data => {
      alert("Hesab yaradildi!")
      localStorage.setItem("currentUser", JSON.stringify(data.body));
      window.location.href = "./home.html";
    })

    .catch(error => {
      alert("Xeta: " + error.message);
    });

}












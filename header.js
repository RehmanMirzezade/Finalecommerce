document.addEventListener("DOMContentLoaded", () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const usernameDisplay = document.getElementById('username');
  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const show = document.querySelector(".show")
  if (currentUser) {
    show.style.display = 'flex'
    usernameDisplay.innerHTML = currentUser.username;
    loginBtn.style.display = 'none';
    logoutBtn.style.display = 'inline-block';
  }else{
     show.style.display = 'none'
    usernameDisplay.innerHTML = "";
    loginBtn.style.display ='inline-block' ;
    logoutBtn.style.display ='none' ;
  }


  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('currentUser');
    window.location.reload();
  });
});
let token = JSON.parse(localStorage.getItem("currentUser")).token

let details = document.getElementById("details")
fetch("http://195.26.245.5:9505/api/clients/get-details", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
})
    .then(res => {
        return res.json();
    })
    .then(data => {
      details.innerHTML = `
       <h1 class="h1h1h1">User Details</h1>
                    <p class="papa"><span style="color: black;" class="spanbaba">Name: </span>${data.name}</p>
                    <p class="papa"><span class="spanbaba">Surname: </span>${data.surname}</p>
                    <p class="papa"><span class="spanbaba">Username: </span>${data.username}</p>
                    <p class="papa"> <span class="spanbaba">Email: </span>${data.email}</p>
                    `
    })

    .catch(error => {
        alert("Xeta: " + error.message);
    });
let form = document.getElementById("forms")
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newUser = {};

    let formData = new FormData(event.target)

    for (const [key, value] of formData.entries()) {
        newUser[key] = value
    }


    fetch(" http://195.26.245.5:9505/api/clients", {
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
            window.location.href = "./login.html";
        })

        .catch(error => {
            alert("Xeta: " + error.message);
        });

})

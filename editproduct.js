let token = JSON.parse(localStorage.getItem("currentUser")).token

let categoryId = document.getElementById("categoryId")
fetch("http://195.26.245.5:9505/api/categories", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
})
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        data.forEach(obj => {
            categoryId.innerHTML += `<option value="${obj.id}">${obj.name}</option>`;
        });
    });


let form = document.getElementById("forms")
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newProduct = {};

    let formData = new FormData(event.target)

    for (const [key, value] of formData.entries()) {
        newProduct[key] = value
    }


    fetch("http://195.26.245.5:9505/api/products", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(newProduct)
    })
        .then(res => {
            if (!res.ok) throw new Error("Error!");
            return res.json();
        })
        .then(data => {
            alert("Product elave edildi")
            window.location.href = "./shop.html";
        })

        .catch(error => {
            alert("Xeta: " + error.message);
        });

})

let token = JSON.parse(localStorage.getItem("currentUser")).token;
let ul = document.querySelector(".category-ul");
let productsContainer = document.querySelector(".products");
let allProducts = [];

fetch("http://195.26.245.5:9505/api/categories", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
})
    .then(res => res.json())
    .then(data => {
        data.forEach(obj => {
            ul.innerHTML += `<li class="category-li" onclick="filterProducts(${obj.id})">${obj.name}</li>`;
        });
    });

fetch("http://195.26.245.5:9505/api/products", {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    },
})
    .then(res => res.json())
    .then(data => {
        allProducts = data;
        renderProducts(allProducts);
    });

function renderProducts(productList) {
    productsContainer.innerHTML = "";

    productList.forEach(obj => {
        productsContainer.innerHTML += `
      <div class="product">
        <img style="height: 200px; width: 250px; object-fit: contain;"
             src="${obj.imageUrl}" alt="">
        <h3>${obj.brand}</h3>
        <h5>${obj.model}</h5>
        <p class="text">${obj.description}</p>
        <h5 style="color: rgb(255, 100, 100);">${obj.price}$</h5>
        <p>
          <i class="fa-solid fa-star star"></i>
          <i class="fa-solid fa-star star"></i>
          <i class="fa-solid fa-star star"></i>
          <i class="fa-solid fa-star star"></i>
          <i class="fa-solid fa-star star"></i>
          (62)
        </p>
        <button class="btn btn-dark add-to-cart-button" onclick="lookProduct(${obj.id})">look product</button>
      </div>
    `;
    });
}

function filterProducts(categoryId) {
    const filtered = allProducts.filter(p => p.categoryId === categoryId);
    renderProducts(filtered);
}

function lookProduct(id) {
    const selectedProduct = allProducts.find(p => p.id === id);
    localStorage.setItem("selectedProduct", JSON.stringify(selectedProduct));
    console.log(selectedProduct);
    
    window.location = "./productpage.html"
}
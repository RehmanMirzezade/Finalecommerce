  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  if (selectedProduct) {
    const image = document.querySelector(".imageg");
    image.src = selectedProduct.imageUrl;
    image.alt = selectedProduct.model;

    document.getElementById("productName").textContent = `${selectedProduct.brand} ${selectedProduct.model}`;

    document.querySelector("h2.text-success").textContent = `$${selectedProduct.price}`;

    document.getElementById("productDescription").textContent = selectedProduct.description;

    const ratingEl = document.querySelector(".text-warning");
    const rating = selectedProduct.averageRating || 0;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = "";

    for (let i = 0; i < fullStars; i++) {
      stars += "★";
    }
    if (halfStar) {
      stars += "½";
    }
    while (stars.length < 5) {
      stars += "☆";
    }

    ratingEl.innerHTML = `${stars} (${rating.toFixed(1)} Reviews) <span style="color: greenyellow;">In stock</span>`;
  } else {
    document.querySelector(".product-container").innerHTML = `
      <div class="alert alert-danger mt-5">Məhsul tapılmadı!</div>
    `;
  }
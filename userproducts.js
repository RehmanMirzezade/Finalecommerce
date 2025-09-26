const apiUrl = "http://195.26.245.5:9505/api/products/myProducts?page=1&size=1"; 
const deleteUrl = "http://195.26.245.5:9505/api/products/delete/";

async function loadProducts() {
  try {
    const response = await fetch(apiUrl, {
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser'))?.token || ''}`
      }
    });

    if (!response.ok) throw new Error("Products loading failed");

    const data = await response.json();
    const tbody = document.getElementById("productsTableBody");
    tbody.innerHTML = ""; 

    data.content.forEach(product => {
      const tr = document.createElement("tr");

      tr.innerHTML = `
        <td>${product.id}</td>
        <td>${product.brand}</td>
        <td>${product.model}</td>
        <td>${product.categoryId}</td>
        <td><img src="${product.imageUrl}" alt="${product.model}" style="width:150px; border-radius:6px;"></td>
        <td>${product.price} $</td>
        <td>${product.averageRating}/5</td>
        <td>
          <button class="btn btn-primary me-2" onclick="editProduct(${product.id})">Redaktə Et</button>
          <button class="btn btn-danger" onclick="deleteProduct(${product.id})">Sil</button>
        </td>
      `;

      tbody.appendChild(tr);
    });
  } catch (error) {
    console.error(error);
  }
}

async function deleteProduct(id) {
  if (!confirm("Bu məhsulu silmək istədiyinizə əminsiniz?")) return;

  try {
    const response = await fetch(deleteUrl + id, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser'))?.token || ''}`
      }
    });

    if (!response.ok) throw new Error("Delete failed");

    alert("Məhsul silindi!");
    loadProducts(); 
  } catch (error) {
    console.error(error);
    alert("Silərkən xəta baş verdi!");
  }
}

function editProduct(id) {
//   window.location.href = ""./editproduct.html?id=${id};
}

document.addEventListener("DOMContentLoaded", loadProducts);
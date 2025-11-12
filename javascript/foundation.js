// Pehle products.json ko fetch karte hain
fetch("../data/products.json")
  .then((response) => {
    if (!response.ok) throw new Error("Failed to load products.json");
    return response.json();
  })
  .then((products) => {
    console.log("✅ Products loaded:", products);
    renderProducts(products); // yeh function niche banaya hai
  })
  .catch((err) => console.error("Error loading JSON:", err));

// Product list render karne wala example function
function renderProducts(products) {
  const productList = document.getElementById("product-list");
  if (!productList) return;

  productList.innerHTML = "";

  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.image}" alt="${p.name}" class="product-img">
      <h3>${p.name}</h3>
      <p>${p.newPrice} <span class="old">${p.oldPrice || ""}</span></p>
      <span class="off">${p.off || ""}</span>
      <p class="rating">${p.rating}</p>
      <a href="${p.page || '#'}" class="view-link">View</a>
    `;
    productList.appendChild(card);
  });
}

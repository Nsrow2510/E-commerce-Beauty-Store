const CART_API_URL = "http://localhost:3000/cart";
const cartlist = document.getElementById("cartlist");

function updateCartCount() {
  fetch(CART_API_URL)
    .then(res => res.json())
    .then(items => {
      let count = 0;
      items.forEach(item => { count += item.qty; });
      const countSpan = document.getElementById("cart-count");
      if (countSpan) countSpan.innerText = count;
    })
    .catch(() => {
      const countSpan = document.getElementById("cart-count");
      if (countSpan) countSpan.innerText = 0;
    });
}

function getCartItems() {
  fetch(CART_API_URL)
    .then(res => res.json())
    .then(items => {
      cartlist.innerHTML = "";
      let totalAmount = 0;
      let totalQty = 0;

      if (items.length === 0) {
        cartlist.innerHTML = "<p>Your cart is empty.</p>";
        updateCartCount();
        return;
      }

      items.forEach(item => {
        totalAmount += item.price * item.qty;
        totalQty += item.qty;

        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
          <img src="${item.image}" width="70" alt="${item.title}">
          <div>
            <p>${item.title}</p>
            <p>₹${item.price} x ${item.qty}</p>
            <button class="qty-btn" data-id="${item.id}" data-action="decrease">-</button>
            <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
            <button class="remove-btn" data-id="${item.id}">Remove</button>
          </div>
        `;
        cartlist.appendChild(div);
      });

      const totalElement = document.getElementById("cart-total-amount");
      if (totalElement) {
        totalElement.innerText = `Total (${totalQty} items): ₹${totalAmount}`;
      }
      updateCartCount();
    }).catch(() => {
      cartlist.innerHTML = "<p>Failed to load cart items.</p>";
      updateCartCount();
    });
}

function changeQty(id, newQty) {
  if (newQty <= 0) {
    removeFromCart(id);
  } else {
    fetch(`${CART_API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ qty: newQty })
    }).then(() => getCartItems());
  }
}

function removeFromCart(id) {
  fetch(`${CART_API_URL}/${id}`, { method: 'DELETE' })
    .then(() => getCartItems());
}

// Event delegation for cart buttons
cartlist.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("qty-btn")) {
    const id = target.getAttribute("data-id");
    const action = target.getAttribute("data-action");

    const itemDiv = target.closest(".cart-item");
    const qtyText = itemDiv.querySelector("p:nth-child(2)").textContent;
    const currentQty = parseInt(qtyText.split("x")[1].trim());

    if (action === "increase") {
      changeQty(id, currentQty + 1);
    } else if (action === "decrease") {
      changeQty(id, currentQty - 1);
    }
  } else if (target.classList.contains("remove-btn")) {
    const id = target.getAttribute("data-id");
    removeFromCart(id);
  }
});

// On page load, run this
document.addEventListener("DOMContentLoaded", () => {
  getCartItems();

  // Show thank you alert if redirected after order
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("order") === "success") {
    alert("Thank you for your order!");
    // Optionally remove the query param to prevent repeated alert
    history.replaceState(null, '', window.location.pathname);
  }
});

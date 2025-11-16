const products = [
  {
    id: 1,
    name: "Maybelline New York Color Ultimattes Lipstick",
    category: "maybelline",
    oldPrice: "₹599",
    newPrice: "₹389",
    off: "35% Off",
    rating: "★★★★☆ (32075)",
    image: "maybelline lipstick.webp",
    page: "lipstick_1.html",
  },
  {
    id: 2,
    name: "Swiss Beauty Pure Matte Lipstick",
    category: "swiss",
    oldPrice: "₹229",
    newPrice: "₹206",
    off: "10% Off",
    rating: "★★★★★ (50867)",
    image: "swissbeauty lipstick.jpg",
    page: "lipstick_2.html",
  },
  {
    id: 3,
    name: "Nykaa Matte to Last No Transfer Long Lasting Lipstick",
    // category: "swiss",
    oldPrice: "₹599",
    newPrice: "₹539",
    off: "10% Off",
    rating: "★★★★☆ (591)",
    image: "nykaa lipstick.avif",
    page: "lipstick_3.html",
  },
  {
    id: 4,
    name: "Lakme 9to5 Hya Matte Lipstick",
    category: "lakme",
    oldPrice: "₹699",
    newPrice: "₹629",
    off: "10% Off",
    rating: "★★★★☆ (74620)",
    image: "lakme_2 lipstick.webp",
  },
  {
    id: 5,
    name: "MARS Creamy Matte Lipstick",
    category: "mars",
    oldPrice: "₹199",
    newPrice: "₹195",
    off: "2% Off",
    rating: "★★★★☆(26401)",
    image: "MARS lipstick.jpg",
  },
  {
    id: 6,
    name: "Kay Beauty Infinite Lip Pen",
    category: "kaybeauty",
    // oldPrice: "₹1499",
    newPrice: "₹1099",
    // off: "40% Off",
    rating: "★★★★☆(44)",
    image: "kaybeauty lipstick.avif",
  },
  {
    id: 7,
    name: "Faces Canada Comfy Silk Obsession Lipstick",
    // category: "loreal",
    oldPrice: "₹1199",
    newPrice: "₹1079",
    off: "10% Off",
    rating: "★★★★☆(15)",
    image: "facescanada lipstick.avif",
  },
  {
    id: 8,
    name: "L'Oreal Paris Color Riche Satin Lipstick",
    category: "loreal",
    oldPrice: "₹849",
    newPrice: "₹679",
    off: "20% Off",
    rating: "★★★★☆(997)",
    image: "loreal lipstick.avif",
  },
  {
    id: 9,
    name: "Insight Cosmetics 24 Hrs Non Transfer Matte Lipstick",
    // category: "lakme",
    oldPrice: "₹295",
    newPrice: "₹289",
    off: "2% Off",
    rating: "★★★★☆(21196)",
    image: "insight lipstick.avif",
  },
  {
    id: 10,
    name: "Kay Beauty Hydra Creme Lipstick",
    category: "kaybeauty",
    // oldPrice: "₹240",
    newPrice: "₹999",
    // off: "5% Off",
    rating: "★★★★☆(4724)",
    image: "kaybeauty_2 lipstick.webp",
  },
  {
    id: 11,
    name: "M.A.C MACximal Mini Matte Red Lipstick",
    category: "mac",
    // oldPrice: "₹625",
    newPrice: "₹1150",
    // off: "20% Off",
    rating: "★★★★☆(33184)",
    image: "mac_2 lipstick.avif",
  },
  {
    id: 12,
    name: "L'Oreal Paris Infallible Matte Resistance Liquid Lipstick",
    category: "loreal",
    oldPrice: "999",
    newPrice: "₹649",
    off: "35% Off",
    rating: "★★★★☆(7682)",
    image: "loreal_2 lipstick.jpg",
  },
  {
    id: 13,
    name: "Lakme 9 To 5 Powerplay Priming Matte Lipstick",
    category: "lakme",
    oldPrice: "₹650",
    newPrice: "₹520",
    off: "20% Off",
    rating: "★★★★☆(72004)",
    image: "lakme_3 lipstick.webp",
  },
  {
    id:14 ,
    name: "Maybelline New York Creamy Matte Lipstick",
    category: "maybelline",
    oldPrice: "₹329",
    newPrice: "₹247",
    off: "25% Off",
    rating: "★★★★☆(164496)",
    image: "maybelline_2 lipstick.webp",
  },
  {
    id: 15,
    name: "Lakme Forever Matte Lipstick",
    category: "lakme",
    oldPrice: "₹375",
    newPrice: "₹319",
    off: "15% Off",
    rating: "★★★★☆(44085)",
    image: "lakme_4 lipstick.avif",
  },
  {
    id: 16,
    name: "Charlotte Tilbury Matte Revolution",
    // category: "retinol",
    oldPrice: "₹3650",
    newPrice: "₹3285",
    off: "10% Off",
    rating: "★★★★★(4988)",
    image: "chalotte lipstick.webp",
  },
{
    id: 17,
    name: "Faces Canada Ultime Pro HD Intense Matte Lips",
    // category: "mac",
    oldPrice: "₹849",
    newPrice: "₹649",
    off: "24% Off",
    rating: "★★★★☆(40874)",
    image: "facescanada_2 lipstick.jpg",
  },
  {
    id: 18,
    name: "MARS Matte Lipsticks Box",
    category: "mars",
    oldPrice: "₹447",
    newPrice: "₹398",
    off: "11% Off",
    rating: "★★★★☆(16417)",
    image: "mars_2 lipstick.avif",
  },
  {
    id: 19,
    name: "SUGAR Matte Attack Transferproof Lipstick",
    // category: "mac",
    oldPrice: "₹749",
    newPrice: "₹524",
    off: "30% Off",
    rating: "★★★★☆(24454)",
    image: "sugar_2 lipstick.jpg",
  },
  {
    id: 20,
    name: "Mamaearth Creamy Matte Long Stay Lipstick",
    // category: "mars",
    oldPrice: "₹399",
    newPrice: "₹367",
    off: "8% Off",
    rating: "★★★★★(2802)",
    image: "mamaearth lipstick.avif",
  },
   {
    id: 21,
    name: "Swiss Beauty HD Matte Lipstick",
    category: "swiss",
    oldPrice: "₹399",
    newPrice: "₹279",
    off: "30% Off",
    rating: "★★★★☆(31107)",
    image: "swissbeauty_2 lipstick.avif",
  },
 {
    id: 22,
    name: "Nykaa Matte Luxe Lipstick",
    // category: "forever52",
    oldPrice: "849",
    newPrice: "₹552",
    off: "35% Off",
    rating: "★★★★☆(14740)",
    image: "nykaa_2 lipstick.avif",
  },
   {
    id: 23,
    name: "Love Earth Liquid Mousse Matte Lipstick",
    // category: "lakme",
    oldPrice: "₹714",
    newPrice: "₹250",
    off: "65% Off",
    rating: "★★★★☆(606)",
    image: "loveearth lipstick.avif",
  },
   {
    id: 24,
    name: "Elle 18 Color Pop Matte Lip Color",
    // category: "mars",
    oldPrice: "₹110",
    newPrice: "₹105",
    off: "5% Off",
    rating: "★★★★☆(71844)",
    image: "elle18 lipstick.webp",
  },
   {
    id: 25,
    name: "Lakme 9 To 5 Primer + Shine Lipstick",
    category: "lakme",
    oldPrice: "₹599",
    newPrice: "₹539",
    off: "10% Off",
    rating: "★★★★☆(1613)",
    image: "lakme_5 lipstick.avif",
  },

  {
    id: 26,
    name: "Maybelline New York Super Stay Vinyl Ink Liquid Lipstick",
    category: "maybelline",
    oldPrice: "₹849",
    newPrice: "₹637",
    off: "25% Off",
    rating: "★★★★☆(39807)",
    image: "mayb_1.avif",
  },

  {
    id: 27,
    name: "MARS Plush Velvet Lipstick",
    category: "mars",
    oldPrice: "₹199",
    newPrice: "₹195",
    off: "2% Off",
    rating: "★★★★☆(5160)",
    image: "mars_3 lipstick.avif",
  },
  
];


/* -----------------------
   ELEMENTS & STATE (your existing)
   ----------------------- */
const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count"); // ensure your HTML has this id
const filterSelect = document.getElementById("filter");
const sortSelect = document.getElementById("sort");
const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");

let currentCategory = "all";
let currentSort = "default";

/* -----------------------
   HELPERS (keep & reuse)
   ----------------------- */
function getPrice(priceStr) {
  return parseFloat(String(priceStr).replace(/[₹,]/g, "")) || 0;
}
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
}
function normalizeText(s) {
  return String(s || "").toLowerCase().replace(/[^a-z0-9\s]/g, "").replace(/\s+/g, " ").trim();
}

/* -----------------------
   BRAND ALIASES + CATEGORY INFERENCE (NEW)
   ----------------------- */
// Add aliases and common variants here so brand searches return all brand products
const brandAliases = {
  "maybelline": "maybelline",
  "maybelline new york": "maybelline",
  "maybelline newyork": "maybelline",
  "nykaa": "nykaa",
  "lakme": "lakme",
  "loreal": "loreal",
  "l'oreal": "loreal",
  "loreal paris": "loreal",
  "mac": "mac",
  "m.a.c": "mac",
  "mars": "mars",
  "kaybeauty": "kaybeauty",
  "kay beauty": "kaybeauty",
  "faces canada": "facescanada",
  "facescanada": "facescanada",
  "swiss beauty": "swiss",
  "swiss": "swiss",
  "forever52": "forever52",
  "forever 52": "forever52",
};

// try to populate missing categories from product name using alias keys
function inferMissingCategories() {
  const aliasKeys = Object.keys(brandAliases);
  products.forEach(p => {
    if ((!p.category || String(p.category).trim() === "") && p.name) {
      const n = normalizeText(p.name);
      for (const a of aliasKeys) {
        if (n.includes(a)) {
          p.category = brandAliases[a];
          break;
        }
      }
    }
  });
}
// call once at init (below)

// derived set for quick checks
let availableCategories = new Set();

/* -----------------------
   RENDER (unchanged except minor safety)
   ----------------------- */
function renderProducts(category = currentCategory, productArray = null) {
  if (!productList) {
    console.warn("renderProducts: productList element not found");
    return;
  }

  productList.innerHTML = "";
  currentCategory = category;

  let base = productArray ? [...productArray] : (category === "all" ? [...products] : products.filter((p) => p.category === category));

  // sort
  if (currentSort === "lowToHigh") base.sort((a,b) => getPrice(a.newPrice) - getPrice(b.newPrice));
  else if (currentSort === "highToLow") base.sort((a,b) => getPrice(b.newPrice) - getPrice(a.newPrice));

  if (!base || base.length === 0) {
    productList.innerHTML = `<p style="padding:20px; color:#666;">No products found.</p>`;
    return;
  }

  // base.forEach((p) => {
  //   const card = document.createElement("div");
  //   card.className = "product-card";
  //   card.innerHTML = `
  //     <img src="${p.image}" alt="${escapeHtml(p.name)}">
  //     <div class="product-info">
  //       <h4>${escapeHtml(p.name)}</h4>
  //       <div class="price">
  //         <span class="old">${p.oldPrice || ""}</span>
  //         <span class="new">${p.newPrice || ""}</span>
  //         <span class="off">${p.off || ""}</span>
  //       </div>
  //       <button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>
  //       <div class="rating">${p.rating || ""}</div>
  //     </div>
  //   `;
  //   productList.appendChild(card);
  // });
  base.forEach((p) => {
  const card = document.createElement("div");
  card.className = "product-card";

  const cart = getCart();
  const inCart = cart.find(item => item.id === p.id);
  const quantity = inCart ? inCart.quantity : 0;

  const quantityControlsHTML = quantity === 0 
    ? `<button class="add-btn" onclick="addToCart(${p.id})">Add to Cart</button>`
    : `<div class="quantity-controls">
        <button class="qty-btn" onclick="decreaseQty(${p.id})">−</button>
        <span class="qty">${quantity}</span>
        <button class="qty-btn" onclick="increaseQty(${p.id})">+</button>
      </div>`;

  card.innerHTML = `
    <a href="${p.page || '#'}" style="color: black; text-decoration: none; cursor: pointer;">
      <img src="${p.image}" alt="${escapeHtml(p.name)}">
      <h4 style="margin: 0;">${escapeHtml(p.name)}</h4>
    </a>
    <div class="product-info">
      <div class="price">
        <span class="old">${p.oldPrice || ""}</span>
        <span class="new">${p.newPrice || ""}</span>
        <span class="off">${p.off || ""}</span>
      </div>
      ${quantityControlsHTML}
      <div class="rating">${p.rating || ""}</div>
    </div>
  `;
  productList.appendChild(card);
});


}

/* -----------------------
   FILTER/SORT (unchanged)
   ----------------------- */
function filterProducts() {
  currentCategory = filterSelect ? filterSelect.value : "all";
  renderProducts(currentCategory);
}
function sortProducts() {
  currentSort = sortSelect ? sortSelect.value : "default";
  renderProducts(currentCategory);
}

/* -----------------------
   CART (unchanged)
   ----------------------- */
function getCart() {
  try { return JSON.parse(localStorage.getItem("cartItems")) || []; } catch { return []; }
}
function saveCart(cart) {
  try { localStorage.setItem("cartItems", JSON.stringify(cart)); } catch(e){ console.warn("saveCart failed", e); }
}
// function addToCart(id) {
//   const product = products.find(p => p.id === id);
//   if (!product) return;
//   const cart = getCart();
//   cart.push(product);
//   saveCart(cart);
//   updateCartCount();
// }
function updateCartCount() {
  if (!cartCount) return;
  cartCount.textContent = getCart().length;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;
  const cart = getCart();
  const existing = cart.find(p => p.id === id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1;
  } else {
    cart.push({...product, quantity: 1});
  }
  saveCart(cart);
  updateCartCount();
  renderProducts(currentCategory);
}


// new code
function increaseQty(id) {
  const cart = getCart();
  const item = cart.find(p => p.id === id);
  if (item) {
    item.quantity = (item.quantity || 1) + 1;
    saveCart(cart);
    updateCartCount();
    renderProducts(currentCategory);
  }
}

function decreaseQty(id) {
  const cart = getCart();
  const index = cart.findIndex(p => p.id === id);
  if (index !== -1) {
    cart[index].quantity = (cart[index].quantity || 1) - 1;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    saveCart(cart);
    updateCartCount();
    renderProducts(currentCategory);
  }
}


/* -----------------------
   SEARCH (REPLACED / NEW)
   ----------------------- */
function handleSearchSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  if (!searchInput) return;
  const raw = String(searchInput.value || "");
  const q = normalizeText(raw);
  console.log("[search] q:", q);

  if (!q) {
    renderProducts("all");
    return;
  }

  // try direct page navigation first (normalized keys)
  const normalizedPageMap = {};
  Object.keys(pageMap).forEach(k => normalizedPageMap[normalizeText(k)] = pageMap[k]);

  // exact or singular/plural variants
  const candidates = new Set([q]);
  if (q.endsWith("s")) candidates.add(q.slice(0,-1));
  else candidates.add(q + "s");

  for (const cand of candidates) {
    if (normalizedPageMap[cand]) {
      window.location.href = normalizedPageMap[cand];
      return;
    }
  }

  // partial page-key match
  const pagePartial = Object.keys(normalizedPageMap).find(k => k.includes(q) || q.includes(k));
  if (pagePartial) {
    window.location.href = normalizedPageMap[pagePartial];
    return;
  }

  // tokens for product/brand matching
  const tokens = q.split(" ").filter(Boolean);

  // 1) BRAND-FIRST: check if any token is a brand alias or an available category
  const matchedBrand = tokens
    .map(t => brandAliases[t] || (availableCategories.has(t) ? t : null))
    .find(Boolean);

  if (matchedBrand) {
    // return all products for that brand/category OR where name mentions the brand
    const matchedProducts = products.filter(p => {
      const cat = normalizeText(p.category || "");
      const name = normalizeText(p.name || "");
      return cat === matchedBrand || name.includes(matchedBrand);
    });
    if (matchedProducts.length) {
      renderProducts("all", matchedProducts);
      return;
    }
  }

  // 2) strict product token match (all tokens must match name or category)
  const strictMatches = products.filter(p => {
    const name = normalizeText(p.name || "");
    const category = normalizeText(p.category || "");
    return tokens.every(t => name.includes(t) || category.includes(t));
  });
  if (strictMatches.length) {
    renderProducts("all", strictMatches);
    return;
  }

  // 3) loose match (any token)
  const looseMatches = products.filter(p => {
    const name = normalizeText(p.name || "");
    const category = normalizeText(p.category || "");
    return tokens.some(t => name.includes(t) || category.includes(t));
  });
  if (looseMatches.length) {
    renderProducts("all", looseMatches);
    return;
  }

  // 4) small synonym fallback -> navigate pages if needed
  const synonymMap = { "primer": "primer.html", "highlighter": "highlighter.html" };
  const synKey = Object.keys(synonymMap).find(k => q === k || q.includes(k) || k.includes(q));
  if (synKey) {
    window.location.href = synonymMap[synKey];
    return;
  }

  // nothing found
  if (productList) productList.innerHTML = `<p style="padding:20px; color:#666;">No results for "<strong>${escapeHtml(q)}</strong>".</p>`;
  console.log("[search] no results for:", q);
}

/* -----------------------
   PAGE MAP (your existing mapping)
   ----------------------- */
const pageMap = {
  // --- Face Care ---
  "face moisturizer": "facemoisturizer.html",
  "cleansers": "cleansers.html",
  "serum": "serum.html",
  "toners": "toners.html",
  "sunscreens": "sunscreens.html",
  "masks": "masks.html",
  // --- Lip Care ---
  "lip balm": "lipbalm.html",
  "lip scrub": "lipscrub.html",
  "lip masks": "lipmasks.html",
  // --- Body Care ---
  "lotions & creams": "lotionscreams.html",
  "body scrubs": "bodyscrubs.html",
  "body sunscreens": "bodysunscreens.html",
  "soaps & body wash": "soapsbodywash.html",
  // --- Eye Care ---
  "undereye cream & serums": "undereyecreams.html",
  "eye masks": "eyemasks.html",
  // --- Makeup: Face ---
  "foundation": "foundation.html",
  "concealer": "concealer.html",
  "primer": "primer.html",
  "highlighter": "highlighter.html",
  // --- Makeup: Eyes ---
  "mascara": "mascara.html",
  "eyeliner": "eyeliner.html",
  "eyeshadow": "eyeshadow.html",
  "kajal": "kajal.html",
  // --- Makeup: Lips ---
  "lipstick": "lipstick.html",
  "lip gloss": "lipgloss.html",
  "lip liner": "lipliner.html",
  "lip tints": "liptints.html",
  // --- Fragrance ---
  "perfume": "perfume.html",
  "body mists": "bodymists.html",
  "roll-ons": "rollons.html",
  // --- Fragrance by Gender ---
  "for women": "forwomen.html",
  "for men": "formen.html",
  "unisex": "unisex.html"
};

/* -----------------------
   INIT & LISTENERS
   ----------------------- */
function init() {
  // infer missing categories once
  inferMissingCategories();

  // refresh derived set of categories
  availableCategories = new Set(products.map(p => normalizeText(p.category || "")).filter(Boolean));

  // initial render
  renderProducts("all");
  updateCartCount();

  // dropdown listeners (if present)
  if (filterSelect) filterSelect.addEventListener("change", filterProducts);
  if (sortSelect) sortSelect.addEventListener("change", sortProducts);

  // search submit: prefer form submit -> fallback to Enter key on input
  if (searchForm) {
    searchForm.addEventListener("submit", handleSearchSubmit);
  } else if (searchInput) {
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSearchSubmit();
      }
    });
  }

  console.log("search initialized. products:", products.length, "availableCategories:", [...availableCategories]);
}

init();

const products = [
  {
    id: 1,
    name: "Maybelline New York Instant Age Rewind Eraser Concealer",
    category: "maybelline",
    oldPrice: "₹799",
    newPrice: "₹479",
    off: "40% Off",
    rating: "★★★★☆ (74651)",
    image: "x_7.jpg",
    page: "concealer_1.html",
  },
  {
    id: 2,
    name: "L'Oreal Paris Infallible Full Wear More Than Concealer",
    category: "loreal",
    oldPrice: "₹849",
    newPrice: "₹509",
    off: "40% Off",
    rating: "★★★★★ (16599)",
    image: "loreal concealer.avif",
    page: "concealer_2.html",
  },
  {
    id: 3,
    name: "Swiss beauty Full Coverage Liquid Concealer",
    category: "swiss",
    oldPrice: "₹249",
    newPrice: "₹224",
    off: "10% Off",
    rating: "★★★★☆ (105835)",
    image: "u_4.jpg",
    page: "concealer_3.html",
  },
  {
    id: 4,
    name: "Too Faced Born Coverage Sculpting Concealer",
    // category: "Kay Beauty",
    oldPrice: "₹2700",
    newPrice: "₹2025",
    off: "25% Off",
    rating: "★★★★☆ (206)",
    image: "too faced concealer.jpeg",
    page: "concealer_4.html",
  },
  {
    id: 5,
    name: "Kay Beauty Soft Matte Full Coverage Concealer",
    category: "kaybeauty",
    // oldPrice: "₹1199",
    newPrice: "₹1199",
    // off: "10% Off",
    rating: "★★★★☆(19)",
    image: "kay beauty concealer.avif",
  },
  {
    id: 6,
    name: "Nykaa SKINgenius Concealer",
    // category: "mac",
    oldPrice: "₹1499",
    newPrice: "₹899",
    off: "40% Off",
    rating: "★★★★☆(7676)",
    image: "nykaa concealer.jpeg",
  },
  {
    id: 7,
    name: "PAC Studio HD Liquid Concealer HD Light 100",
    // category: "loreal",
    oldPrice: "₹695",
    newPrice: "₹591",
    off: "15% Off",
    rating: "★★★★☆(30)",
    image: "pac concealer.avif",
  },
  {
    id: 8,
    name: "Bobbi Brown Skin Full Cover Concealer",
    // category: "salicylic",
    oldPrice: "₹3890",
    newPrice: "₹2918",
    off: "25% Off",
    rating: "★★★★☆(144)",
    image: "bobbi brown concealer.avif",
  },
  {
    id: 9,
    name: "Lakme 9 To 5 Hya Matte Liquid Concealer",
    category: "lakme",
    oldPrice: "₹699",
    newPrice: "₹629",
    off: "10% Off",
    rating: "★★★★☆(17693)",
    image: "lakme_2 concealer.avif",
  },
  {
    id: 10,
    name: "Insight Cosmetics Pro Concealer Palette",
    // category: "retinol",
    oldPrice: "₹240",
    newPrice: "₹228",
    off: "5% Off",
    rating: "★★★★☆(59260)",
    image: "insight concealer.avif",
  },
  {
    id: 11,
    name: "Daily Life Forever52 Complete Coverage Concealer",
    category: "forever52",
    oldPrice: "₹625",
    newPrice: "₹525",
    off: "20% Off",
    rating: "★★★★☆(17523)",
    image: "forever52 concealer.avif",
  },
  {
    id: 12,
    name: "Lakme 9 To 5 Powerplay Priming Concealer",
    category: "lakme",
    oldPrice: "625",
    newPrice: "₹500",
    off: "20% Off",
    rating: "★★★★☆(9680)",
    image: "lakme concealer.webp",
  },
  {
    id: 13,
    name: "Maybelline New York Fit Me Concealer",
    category: "maybelline",
    oldPrice: "₹599",
    newPrice: "₹419",
    off: "30% Off",
    rating: "★★★★☆(75840)",
    image: "maybelline concealer.avif",
  },
  {
    id:14 ,
    name: "Kay Beauty HD Liquid Concealer",
    category: "kaybeauty",
    oldPrice: "₹849",
    newPrice: "₹679",
    off: "20% Off",
    rating: "★★★★☆(8379)",
    image: "kay_beauty concealer.avif",
  },
  {
    id: 15,
    name: "MARS SPF50 PA++++ Cancel Concealer",
    category: "mars",
    oldPrice: "₹249",
    newPrice: "₹229",
    off: "8% Off",
    rating: "★★★★☆(872)",
    image: "mars concealer.avif",
  },
  {
    id: 16,
    name: "Insight Cosmetics Concealer",
    // category: "retinol",
    oldPrice: "₹125",
    newPrice: "₹119",
    off: "5% Off",
    rating: "★★★★★(2071)",
    image: "insight_2 concealer.avif",
  },
{
    id: 17,
    name: "M.A.C Studio Fix Conceal and Correct Palette",
    category: "mac",
    // oldPrice: "₹399",
    newPrice: "₹5450",
    // off: "5% Off",
    rating: "★★★★☆(1633)",
    image: "mac concealer.avif",
  },
  {
    id: 18,
    name: "Lakme Vitamin C Superglow Concealer",
    category: "lakme",
    oldPrice: "₹350",
    newPrice: "₹315",
    off: "10% Off",
    rating: "★★★★☆(1069)",
    image: "lakme_3 concealer.avif",
  },
  {
    id: 19,
    name: "M.A.C Studio Fix 24-Hour Smooth Wear Concealer",
    category: "mac",
    oldPrice: "₹3000",
    newPrice: "₹2400",
    off: "20% Off",
    rating: "★★★★☆(71119)",
    image: "mac_3 concealer.avif",
  },
  {
    id: 20,
    name: "Elle 18 Get Even Concealer",
    // category: "mars",
    oldPrice: "₹175",
    newPrice: "₹163",
    off: "7% Off",
    rating: "★★★★★(33)",
    image: "elle18 concealer.webp",
  },
   {
    id: 21,
    name: "MARS Cover Rangers Concealer Palette",
    category: "mars",
    oldPrice: "₹599",
    newPrice: "₹551",
    off: "8% Off",
    rating: "★★★★☆(2547)",
    image: "mars_2 concealer.avif",
  },
 {
    id: 22,
    name: "Daily Life Forever52 4 Color Concealer",
    category: "forever52",
    oldPrice: "999",
    newPrice: "₹879",
    off: "12% Off",
    rating: "★★★★☆(5375)",
    image: "forever52_2 concealer.avif",
  },
   {
    id: 23,
    name: "Lakme Absolute Instant Airbrush Concealer",
    category: "lakme",
    oldPrice: "₹699",
    newPrice: "₹559",
    off: "20% Off",
    rating: "★★★★☆(1020)",
    image: "lakme_4 concealer.avif",
  },
   {
    id: 24,
    name: "MARS Wonder Cover Liquid Concealer",
    category: "mars",
    oldPrice: "₹199",
    newPrice: "₹189",
    off: "5% Off",
    rating: "★★★★☆(6206)",
    image: "mac_3 concealer.avif",
  },
   {
    id: 25,
    name: "Lakme Unreal Cover Creme Concealer",
    category: "lakme",
    oldPrice: "₹675",
    newPrice: "₹608",
    off: "10% Off",
    rating: "★★★★☆(765)",
    image: "lakme_5 concealer.avif",
  },

  {
    id: 26,
    name: "MARS Blossom Liquid Concealer",
    category: "mars",
    oldPrice: "₹249",
    newPrice: "₹149",
    off: "40% Off",
    rating: "★★★★☆(8729)",
    image: "mars_4 concealer.avif",
  },

  {
    id: 27,
    name: "Lakme Vit C Superglow Concealer",
    category: "lakme",
    oldPrice: "₹650",
    newPrice: "₹585",
    off: "10% Off",
    rating: "★★★★☆(2271)",
    image: "lakme_6 concealer.avif",
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




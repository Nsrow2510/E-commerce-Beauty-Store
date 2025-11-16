const products = [
  {
    id: 1,
    name: "Maybelline New York Face Studio Metallic Highlighter",
    category: "maybelline",
    oldPrice: "₹779",
    newPrice: "₹576",                                     
    off: "26% Off",
    rating: "★★★★☆ (36774)",
    image: "maybelline highlighter.avif",
  },
  {
    id: 2,
    name: "Kay Beauty Luminessence Strobe Cream",
    category: "kaybeauty",
    // oldPrice: "₹849",
    newPrice: "₹1199",
    // off: "40% Off",
    rating: "★★★★★ (47)",
    image: "kaybeauty highlighter.avif",
  },
  {
    id: 3,
    name: "M.A.C Strobe Cream Mini Liquid Highlighter",
    category: "mac",
    // oldPrice: "₹619",
    newPrice: "₹1500",
    // off: "30% Off",
    rating: "★★★★☆ (15733)",
    image: "mac highlighter.avif",
  },
  {
    id: 4,
    name: "Swiss Beauty Drop and Glow Liquid Highlighter",
    category: "swiss",
    oldPrice: "₹449",
    newPrice: "₹382",
    off: "10% Off",
    rating: "★★★★☆ (18301)",
    image: "swiss_beauty highlighter.avif",
  },
  {
    id: 5,
    name: "Nykaa Strobe & Glow Liquid Cream Highlighter",
    // category: "kaybeauty",
    oldPrice: "₹725",
    newPrice: "₹580",
    off: "20% Off",
    rating: "★★★★☆(14266)",
    image: "nykaa highlighter.avif",
  },
  {
    id: 6,
    name: "Charlotte Tilbury Glowgasm Beauty Light Wand",
    category: "charlotte",
    oldPrice: "₹4050",
    newPrice: "₹2835",
    off: "30% Off",
    rating: "★★★★☆(313)",
    image: "charlotte highlighter.avif",
  },
  {
    id: 7,
    name: "Smashbox X Becca Skin Perfector Pressed Highlighter",
    // category: "loreal",
    // oldPrice: "₹",
    newPrice: "₹2100",
    // off: "10% Off",
    rating: "★★★★☆(2374)",
    image: "smashbox highlighter.avif",
  },
  {
    id: 8,
    name: "Kay Beauty Hyper Gloss Liquid Luminizing Highlighter",
    category: "kaybeauty",
    // oldPrice: "₹525",
    newPrice: "₹949",
    // off: "15% Off",
    rating: "★★★★☆(1995)",
    image: "kaybeauty_2 highlighter.avif",
  },
  {
    id: 9,
    name: "Faces Canada Strobe Cream, Rose Gold Highlighter",
    // category: "mars",
    oldPrice: "₹599",
    newPrice: "₹509",
    off: "15% Off",
    rating: "★★★★☆(17934)",
    image: "faces_canada highlighter.avif",
  },
  {
    id: 10,
    name: "Lakme Lumi Lit Strobe Cream Highlighter + Moisturizer",
    category: "lakme",
    oldPrice: "₹349",
    newPrice: "₹332",
    off: "5% Off",
    rating: "★★★★☆(53935)",
    image: "lakme highlighter.avif",
  },
  {
    id: 11,
    name: "NYX Professional Makeup Jumbo Highlighter",
    // category: "forever52",
    // oldPrice: "₹625",
    newPrice: "₹699",
    // off: "20% Off", 
    rating: "★★★★☆(3461)",
    image: "nyx highlighter.jpg",
  },
  {
    id: 12,
    name: "MARS Glowzilla 6 Shade Face Highlighter",
    category: "mars",
    oldPrice: "329",
    newPrice: "₹309",
    off: "6% Off",
    rating: "★★★★☆(6283)",
    image: "mars highlighter.avif",
  },
  {
    id: 13,
    name: "M.A.C Strobe Cream - Pinklite Liquid Highlighter",
    category: "mac",
    // oldPrice: "₹599",
    newPrice: "₹4200",
    // off: "30% Off",
    rating: "★★★★☆(4336)",
    image: "mac_2 highlighter.avif",
  },
  {
    id:14 ,
    name: "Insight Cosmetics Highlighter",
    // category: "kaybeauty",
    oldPrice: "₹125",
    newPrice: "₹123",
    off: "2% Off",
    rating: "★★★★☆(54067)",
    image: "insight highlighter.avif",
  },
  {
    id: 15,
    name: "e.l.f. Cosmetics Halo Glow Liquid Filter",
    category: "elf",
    // oldPrice: "₹1350",
    newPrice: "₹1800",
    // off: "15% Off",
    rating: "★★★★☆(8877)",
    image: "elf highlighter.jpg",
  },
  {
    id: 16,
    name: "Lakme Ultimate Glam Highlighter",
    category: "lakme",
    oldPrice: "₹500",
    newPrice: "₹450",
    off: "10% Off",
    rating: "★★★★★(7175)",
    image: "lakme_2 highlighter.avif",
  },
{
    id: 17,
    name: "Charlotte Tilbury Hollywood Flawless Filter Mini",
    category: "charlotte",
    // oldPrice: "₹329",
    newPrice: "₹2000",
    // off: "9% Off",
    rating: "★★★★☆(3416)",
    image: "charlotte_2 highlighter.avif",
  },
  {
    id: 18,
    name: "Swiss Beauty Baked Blusher & Highlighter",
    category: "swiss",
    oldPrice: "₹399",
    newPrice: "₹339",
    off: "15% Off",
    rating: "★★★★☆(26291)",
    image: "swissbeauty highlighter.jpeg",
  },
  {
    id: 19,
    name: "Charlotte Tilbury Hollywood Flawless Filter",
    category: "charlotte",
    oldPrice: "₹5100",
    newPrice: "₹3570",
    off: "30% Off",
    rating: "★★★★☆(1292)",
    image: "charlotte_2 highlighter.webp",
  },
  {
    id: 20,
    name: "Kay Beauty Illuminating Highlighter",
    category: "kaybeauty",
    oldPrice: "₹899",
    newPrice: "₹764",
    off: "15% Off",
    rating: "★★★★★(6554)",
    image: "kaybeauty_3 highlighter.webp",
  },
   {
    id: 21,
    name: "Nykaa Glow Goals! Shimmer Brick Highlighter Palette",
    // category: "recode",
    oldPrice: "₹699",
    newPrice: "₹454",
    off: "35% Off",
    rating: "★★★★☆(7883)",
    image: "nykaa_2 highlighter.avif",
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



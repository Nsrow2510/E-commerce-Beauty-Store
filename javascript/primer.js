const products = [
  {
    id: 1,
    name: "Lakme Unreal Blur Perfect Face Primer",
    category: "lakme",
    oldPrice: "₹899",
    newPrice: "₹719",                                     
    off: "40% Off",
    rating: "★★★★☆ (76928)",
    image: "lakme primer.avif",
  },
  {
    id: 2,
    name: "e.l.f. Cosmetics Power Grip Primer",
    category: "elf",
    // oldPrice: "₹849",
    newPrice: "₹1300",
    // off: "40% Off",
    rating: "★★★★★ (16599)",
    image: "elf primer.avif",
  },
  {
    id: 3,
    name: "Maybelline New York Fit Me Primer",
    category: "maybelline",
    oldPrice: "₹619",
    newPrice: "₹433",
    off: "30% Off",
    rating: "★★★★☆ (29096)",
    image: "maybelline primer.avif",
  },
  {
    id: 4,
    name: "Kay Beauty Sheer Silk Primer With Green Tea Extract",
    category: "Kay Beauty",
    oldPrice: "₹1199",
    newPrice: "₹1079",
    off: "10% Off",
    rating: "★★★★☆ (48)",
    image: "kay_beauty primer.avif",
  },
  {
    id: 5,
    name: "Praush Beauty Silk Blur Moisturizing Primer",
    // category: "kaybeauty",
    oldPrice: "₹650",
    newPrice: "₹553",
    off: "15% Off",
    rating: "★★★★☆(4133)",
    image: "praush primer.avif",
  },
  {
    id: 6,
    name: "Insight Cosmetics 3 In 1 Long Lasting Prime, Primer",
    // category: "mac",
    oldPrice: "₹325",
    newPrice: "₹309",
    off: "5% Off",
    rating: "★★★★☆(68612)",
    image: "insight primer.webp",
  },
  {
    id: 7,
    name: "Charlotte Tilbury Invisible UV Flawless Poreless Primer SPF 50 PA++++",
    // category: "loreal",
    oldPrice: "₹5750",
    newPrice: "₹5175",
    off: "10% Off",
    rating: "★★★★☆(59)",
    image: "charlotte primer.avif",
  },
  {
    id: 8,
    name: "Earth Rhythm Glow Set Go All Day Strobe Cream Primer + Highlighter",
    // category: "salicylic",
    oldPrice: "₹525",
    newPrice: "₹446",
    off: "15% Off",
    rating: "★★★★☆(144)",
    image: "earth rythm primer.avif",
  },
  {
    id: 9,
    name: "MARS Its Glow Clock Primer Griping Glow",
    category: "mars",
    oldPrice: "₹399",
    newPrice: "₹367",
    off: "8% Off",
    rating: "★★★★☆(1295)",
    image: "mars primer.avif",
  },
  {
    id: 10,
    name: "Bobbi Brown Vitamin Enriched Face Base Moisturizer & Primer",
    // category: "retinol",
    // oldPrice: "₹240",
    newPrice: "₹7500",
    // off: "5% Off",
    rating: "★★★★☆(4302)",
    image: "bobbi primer.avif",
  },
  {
    id: 11,
    name: "Smashbox The Original Photo Finish Smooth & Blur Primer",
    // category: "forever52",
    // oldPrice: "₹625",
    newPrice: "₹1650",
    // off: "20% Off",
    rating: "★★★★☆(3461)",
    image: "smshbox primer.avif",
  },
  {
    id: 12,
    name: "Recode Ace Of Base Primer",
    category: "recode",
    oldPrice: "799",
    newPrice: "₹719",
    off: "10% Off",
    rating: "★★★★☆(9680)",
    image: "recode primer.jpeg",
  },
  {
    id: 13,
    name: "Benefit Cosmetics The POREfessional Pore Primer Mini",
    // category: "maybelline",
    // oldPrice: "₹599",
    newPrice: "₹1540",
    // off: "30% Off",
    rating: "★★★★☆(4336)",
    image: "benefit primer.avif",
  },
  {
    id:14 ,
    name: "Kay Beauty Illuminating Strobe Priming Drops",
    category: "kaybeauty",
    oldPrice: "₹999",
    newPrice: "₹799",
    off: "20% Off",
    rating: "★★★★☆(4268)",
    image: "kay_beauty_2 primer.avif",
  },
  {
    id: 15,
    name: "e.l.f. Cosmetics Liquid Poreless Putty Primer - Universal Sheer",
    category: "elf",
    oldPrice: "₹1350",
    newPrice: "₹1148",
    off: "15% Off",
    rating: "★★★★☆(47)",
    image: "elf_2  primer.avif",
  },
  {
    id: 16,
    name: "Lakme 9to5 Double Duty Moisturiser + Primer",
    category: "lakme",
    oldPrice: "₹650",
    newPrice: "₹553",
    off: "15% Off",
    rating: "★★★★★(156)",
    image: "lakme_2 primer.avif",
  },
{
    id: 17,
    name: "MARS Illuminati Base Primer +Strobe Cream + Highlighter",
    category: "mars",
    oldPrice: "₹329",
    newPrice: "₹299",
    off: "9% Off",
    rating: "★★★★☆(3857)",
    image: "mars_2 primer.avif",
  },
  {
    id: 18,
    name: "SUGAR Base Of Glory Pore Minimizing Primer",
    category: "sugar",
    oldPrice: "₹849",
    newPrice: "₹722",
    off: "15% Off",
    rating: "★★★★☆(7872)",
    image: "sugar primer.avif",
  },
  {
    id: 19,
    name: "M.A.C Prep + Prime Natural Radiance Primer - Radiant Pink",
    category: "mac",
    // oldPrice: "₹3000",
    newPrice: "₹4300",
    // off: "20% Off",
    rating: "★★★★☆(1116)",
    image: "mac primer.avif",
  },
  {
    id: 20,
    name: "SUGAR The Most Eligiblur Correcting Primer",
    category: "sugar",
    oldPrice: "₹799",
    newPrice: "₹711",
    off: "11% Off",
    rating: "★★★★★(207)",
    image: "sugar_2 primer.avif",
  },
   {
    id: 21,
    name: "Recode Perfect Grip Waterproof Primer",
    category: "recode",
    oldPrice: "₹699",
    newPrice: "₹629",
    off: "10% Off",
    rating: "★★★★☆(560)",
    image: "recode_2 primer.webp",
  },
 {
    id: 22,
    name: "Kay Beauty Luminessence Strobe Cream",
    category: "kaybeauty",
    // oldPrice: "999",
    newPrice: "₹1199",
    // off: "12% Off",
    rating: "★★★★☆(5375)",
    image: "kaybeauty primer.avif",
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





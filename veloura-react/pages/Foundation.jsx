import React, { useEffect, useState } from "react";
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products.json";

export default function Foundation() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("default");
  const [cart, setCart] = useState([]);

  // LOAD PRODUCTS
  useEffect(() => {
    setProducts(productsData);
  }, []);

  // CART FUNCTIONS
  function addToCart(id) {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === id);
      if (exists) {
        return prev.map((p) =>
          p.id === id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { id, quantity: 1 }];
    });
  }

  function increaseQty(id) {
    setCart((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, quantity: p.quantity + 1 } : p
      )
    );
  }

  function decreaseQty(id) {
    setCart((prev) =>
      prev
        .map((p) =>
          p.id === id ? { ...p, quantity: p.quantity - 1 } : p
        )
        .filter((p) => p.quantity > 0)
    );
  }

  // FILTER
  const filtered =
    filter === "all"
      ? products
      : products.filter(
          (p) => (p.category || "").toLowerCase() === filter.toLowerCase()
        );

  // SORT
  const sorted = [...filtered].sort((a, b) => {
    const price = (x) => parseInt(String(x).replace(/[₹,]/g, "")) || 0;

    if (sort === "lowToHigh") return price(a.newPrice) - price(b.newPrice);
    if (sort === "highToLow") return price(b.newPrice) - price(a.newPrice);
    return 0;
  });

  return (
    <div className="main-container">
      <Filters
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <section className="products">
        {sorted.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            cart={cart}
            addToCart={addToCart}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
          />
        ))}
      </section>
    </div>
  );
}

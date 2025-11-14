export default function ProductCard({ product, addToCart, increaseQty, decreaseQty, cart }) {
  
  const inCart = cart.find(p => p.id === product.id);
  const qty = inCart ? inCart.quantity : 0;

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h4>{product.name}</h4>

      <div className="price">
        <span className="old">{product.oldPrice}</span>
        <span className="new">{product.newPrice}</span>
        <span className="off">{product.off}</span>
      </div>

      {/* BUTTONS */}
      {qty === 0 ? (
        <button className="add-btn" onClick={() => addToCart(product.id)}>
          Add to Cart
        </button>
      ) : (
        <div className="qty-controls">
          <button onClick={() => decreaseQty(product.id)}>-</button>
          <span>{qty}</span>
          <button onClick={() => increaseQty(product.id)}>+</button>
        </div>
      )}

      <div className="rating">{product.rating}</div>
    </div>
  );
}

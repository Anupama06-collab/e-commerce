import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item._id}>
              <h4>{item.name}</h4>
              <p>
                {item.quantity} x ₹{item.price}
              </p>
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={() => alert("Checkout successful!")}>
            Buy Now
          </button>
          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </div>
  );
};

export default Cart;

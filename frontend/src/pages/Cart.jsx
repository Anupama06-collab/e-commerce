import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  // Calculate total
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center" }}>Your cart is empty</p>
      ) : (
        <>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {cart.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "1rem",
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                  <img
                    src={item.image || "https://via.placeholder.com/100"}
                    alt={item.name}
                    style={{ width: "80px", height: "80px", borderRadius: "8px" }}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>₹{item.price} × {item.quantity}</p>
                    <p style={{ fontWeight: "bold" }}>
                      Subtotal: ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "0.5rem 1rem",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div
            style={{
              textAlign: "right",
              fontSize: "1.2rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            Total: ₹{total}
          </div>

          {/* Action Buttons */}
          <div style={{ textAlign: "right" }}>
            <button
              onClick={clearCart}
              style={{
                background: "gray",
                color: "white",
                border: "none",
                padding: "0.7rem 1.5rem",
                borderRadius: "5px",
                cursor: "pointer",
                marginRight: "1rem",
              }}
            >
              Clear Cart
            </button>
            <button
              style={{
                background: "green",
                color: "white",
                border: "none",
                padding: "0.7rem 1.5rem",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;

import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "1rem",
        textAlign: "center",
        boxShadow: "0px 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{ width: "150px", height: "150px", objectFit: "cover" }}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        style={{
          background: "green",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;

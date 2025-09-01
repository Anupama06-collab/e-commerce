import React, { useState } from "react";
import ProductList from "../components/ProductList";

const Shop = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Shop</h2>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ display: "block", margin: "1rem auto", padding: "0.5rem" }}
      />
      <ProductList search={query} />
    </div>
  );
};

export default Shop;

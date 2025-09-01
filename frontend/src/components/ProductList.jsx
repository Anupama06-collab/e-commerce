import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const ProductList = ({ search }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products") // change to your backend URL when deployed
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  // 🔍 Filter products by search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem",
        padding: "2rem",
      }}
    >
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      ) : (
        <p style={{ textAlign: "center", gridColumn: "1/-1" }}>
          No products found.
        </p>
      )}
    </div>
  );
};

export default ProductList;

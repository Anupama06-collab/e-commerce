import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const API_BASE = import.meta.env.VITE_API_URL || "https://e-commerce-uxbe.onrender.com";

const ProductList = ({ search }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/products`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="product-list">
      {filtered.map((p) => (
        <ProductCard key={p._id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;

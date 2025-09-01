import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://your-backend-on-render.com/api/products") // replace with your Render URL
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', padding: '2rem' }}>
      {products.map(product => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;

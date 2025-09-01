import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://e-commerce-uxbe.onrender.com/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', padding: '2rem' }}>
      {products.map(p => <ProductCard key={p._id} product={p} />)}
    </div>
  );
};

export default ProductList;

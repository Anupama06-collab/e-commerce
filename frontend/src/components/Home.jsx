import React from 'react';
import Carousel from './Carousel';
import ProductList from './ProductList';

const Home = () => (
  <div>
    <Carousel />
    <h2 style={{ textAlign: 'center', marginTop: '2rem', color: '#e52e71' }}>Featured Products</h2>
    <ProductList />
  </div>
);

export default Home;

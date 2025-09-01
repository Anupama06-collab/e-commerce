import React from "react";
import Carousel from "../components/Carousel";
import ProductList from "../components/ProductList";

const Home = () => (
  <div>
    <Carousel />
    <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Featured Products</h2>
    <ProductList />
  </div>
);

export default Home;

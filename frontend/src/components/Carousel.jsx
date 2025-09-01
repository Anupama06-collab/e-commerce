import React from 'react';
import Slider from 'react-slick';
import './Carousel.css';

const featuredProducts = [
  { id: 1, name: "Rainbow Hoodie", image: "https://via.placeholder.com/300x200" },
  { id: 2, name: "Vibrant Sneakers", image: "https://via.placeholder.com/300x200" },
  { id: 3, name: "Colorful Backpack", image: "https://via.placeholder.com/300x200" },
];

const Carousel = () => {
  const settings = { dots: true, infinite: true, speed: 500, slidesToShow: 1, slidesToScroll: 1, autoplay: true, autoplaySpeed: 3000, arrows: false };
  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {featuredProducts.map(item => (
          <div key={item.id} className="carousel-slide">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;

import React from 'react';
import './productCard.css';

function ProductCard({ image, name, rating, reviews, price }) {
  return (
    <div className="product-card">
      
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;700&display=swap"
          rel="stylesheet"
        />
      
      <div className="image-wrapper">
        <img src={image} alt={name} />
      </div>
      <h3 className="product-name">{name}</h3>

      <div className="rating-info">
        <span className="rate">{rating}</span>
        <span className="reviews">({reviews})</span>
        <span className="price">{price}₺</span>
      </div>
    </div>
  );
}

export default ProductCard;

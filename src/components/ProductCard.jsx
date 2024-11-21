import React from 'react';
import './ProductCard.css';


const ProductCard = ({ product }) => {
  const { image, category, title, price } = product;

  return (
    <div className="product-card">
        <div className="product-image-container">
            <img src={image} alt={title} className="product-image" />
        </div>
        <div className="product-details">
            <p className="product-category">{category}</p>
            <h2 className="product-title">{title}</h2>
            <div className="product-card-add-to-card-container">
              <p className="product-price">${price.toFixed(2)}</p>
              <button className="add-to-cart-button">Add to cart</button>
            </div>
        </div>
    </div>
  );
};

export default ProductCard;

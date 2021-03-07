import React from "react";
import "./Product.css";

const Product = ({ title, image, price, rating }) => {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </p>
      </div>
      <img src={image} alt="Product image" />
      <button className="product_button">Add to Basket</button>
    </div>
  );
};

export default Product;

import React from "react";
import "./ProductCard.css";
const ProductCard = ({ products }) => {
  return (
    <div className="product-card-container">
      {products.map((product, id) => (
        <div className="card-container" key={product.id}>
          <div className="card">
            <img src={product.image} alt="" />
            <h4>{product.title}</h4>
            <p>{product.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div>
      {products.map((product, id) => (
        <div className="card-container" key={product.id}>
          <div className="card">
            <img width="200px" src={product.image} alt="" />
            <h4>{product.title}</h4>
            <p>Fiyat:{product.price}$</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;

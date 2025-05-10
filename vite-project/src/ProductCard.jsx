import React from 'react';

const ProductCard = ({ title, image }) => {
  return (
    <div>
      <img src={image} alt={title} width="200" />
      <h3>{title}</h3>
    </div>
  );
};

export default ProductCard;

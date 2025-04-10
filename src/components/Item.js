import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleAddToCartClick = () => {
    setIsInCart(true);
  };

  return (
    <li className={`item ${isInCart ? 'in-cart' : ''}`}>
      <span className="name">{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;

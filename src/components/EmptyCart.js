import React from "react";
import "../CSS/EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="empty-cart-page">
      <p>Your cart is empty</p>
      <button onClick={() => (window.location.href = "/products")}>
        Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;

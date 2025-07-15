import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../CSS/Cart.css";
import emptycart from "../assets/emptyy-cart.png";
import Carousel from "./Carousel";

const Cart = ({ cartItems, removeFromCart, updateQuantity }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (itemId) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(itemId)) {
        return prevSelected.filter((id) => id !== itemId);
      } else {
        return [...prevSelected, itemId];
      }
    });
  };

  const incrementQuantity = (itemId) => {
    const currentItem = cartItems.find((item) => item.id === itemId);
    if (currentItem) {
      const currentQuantity = currentItem.quantity;
      updateQuantity(itemId, currentQuantity + 1);
    }
  };

  const decrementQuantity = (itemId) => {
    const currentItem = cartItems.find((item) => item.id === itemId);
    if (currentItem) {
      const currentQuantity = currentItem.quantity;
      if (currentQuantity > 1) {
        updateQuantity(itemId, currentQuantity - 1);
      }
    }
  };

  const totalAmount = cartItems.reduce(
    (acc, item) =>
      acc +
      (item.price > 0 && item.quantity > 0 ? item.price * item.quantity : 0),
    0
  );

  const removeSelectedItems = () => {
    selectedItems.forEach((itemId) => removeFromCart(itemId));
    setSelectedItems([]);
  };

  return (
    <div className="cart">
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src={emptycart} alt="Empty Cart" className="empty-cart-image" />
          <h1>Your Cart is Empty</h1>
          <p>Your cart is currently empty. Start adding items!</p>
        </div>
      ) : (
        <>
          <h1>Your Cart</h1>
          <ul>
            {cartItems.map((item) => (
              <li
                key={item.id}
                className={`cart-item ${
                  selectedItems.includes(item.id) ? "selected" : ""
                }`}
                onClick={() => handleItemClick(item.id)}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h2>{item.name}</h2>
                  <p>₱{item.price}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        decrementQuantity(item.id);
                      }}
                      className="quantity-btn decrement-btn"
                    >
                      -
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        incrementQuantity(item.id);
                      }}
                      className="quantity-btn increment-btn"
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromCart(item.id);
                  }}
                  className="delete-btn"
                  aria-label="Remove item"
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={removeSelectedItems}
            className="remove-selected-btn"
            disabled={selectedItems.length === 0}
          >
            Remove Selected
          </button>
          <div className="cart-total">
            <div className="total-container">
              <h3>Total: ₱{totalAmount.toFixed(2)}</h3>
            </div>
            <Link to="/place-order" state={{ cartItems, totalAmount }}>
              <button
                className="checkout-btn"
                disabled={cartItems.length === 0}
              >
                Checkout
              </button>
            </Link>
          </div>
        </>
      )}

      <Carousel />
    </div>
  );
};

export default Cart;

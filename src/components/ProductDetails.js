import React, { useState } from "react";
import "../CSS/ProductDetails.css";
import auralisImage from "../assets/auralisshome.gif";

const ProductDetails = ({ addToCart }) => {
  const [selectedImage, setSelectedImage] = useState(auralisImage);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: "AURALIS PRIMO Q1",
      price: 999.0,
      image: selectedImage,
    };
    addToCart(product, 1);
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  return (
    <div className="product-details">
      {/* Confirmation Message */}
      {showConfirmation && (
        <div className="confirmation-message">Product added to cart!</div>
      )}

      <div className="product-gallery">
        {[...Array(4)].map((_, index) => (
          <div
            className="thumbnail"
            key={index}
            onClick={() => handleThumbnailClick(auralisImage)}
          >
            <img src={auralisImage} alt="Product Thumbnail" />
          </div>
        ))}
      </div>

      <div className="product-main">
        <img className="main-image" src={selectedImage} alt="Main Product" />
      </div>

      <div className="product-info">
        <h2 className="product-name">AURALIS PRIMO Q1</h2>
        <p className="product-description">Wired Over-Ear Q1 Headphones</p>
        <div className="product-rating">★★★★★ 1234 Ratings</div>

        <div className="product-pricing">
          <span className="current-price">₱999.00</span>
          <span className="original-price">₱1299.00</span>
        </div>

        <div className="price-info">
          <span className="discount">You save ₱300.00 (23.1%)</span>
          <span className="stock-status">In Stock</span>
        </div>

        <div className="offers">
          <button>No Cost EMI on Credit Card</button>
          <button>Pay Later & Avail Cashback</button>
        </div>

        <div className="actions">
          <button className="add-to-cart" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

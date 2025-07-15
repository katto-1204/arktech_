import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Products.css";
import clickSound from "../assets/click.wav"; // Adjust the path as needed

import TUF_Gaming_VG27VQ from "../products-assets/TUF Gaming VG27VQ.png";
import Apple_MacBook_Air from "../products-assets/Apple MacBook Air.png";
import Samsung_Galaxy_S24_Ultra from "../products-assets/Samsung Galaxy S24 Ultra.png";
import Brother_Printer from "../products-assets/Brother Printer.png";
import iPhone_11_Pro_Max from "../products-assets/iPhone 11 Pro Max.png";
import Logitech_G413_Keyboard from "../products-assets/Logitech G413 Mechanical Keyboard.png";
import Redragon_M601_Mouse from "../products-assets/Redragon M601-3 Centrophorus Mouse.png";
import HyperX_Cloud_Alpha from "../products-assets/HyperX Cloud Alpha Wireless Headset.png";
import Dell_Inspiron_3910 from "../products-assets/Dell Inspiron 3910 Intel Desktop.png";
import ASUS_340MC from "../products-assets/ASUS 340MC.png";
import Dell_Inspiron_Laptop from "../products-assets/Dell Inspiron 15.6 FHD Laptop.png";
import ASUS_Laptop_L150 from "../products-assets/ASUS Laptop L150 Ultimate.png";
import HP_Slim_27_Bundle from "../products-assets/HP Slim 27 Desktop Bundle.png";
import Lenovo_ThinkPad_E16 from "../products-assets/Lenovo ThinkPad E16.png";
import SAMSUNG_Galaxy_Book from "../products-assets/SAMSUNG Galaxy Book.png";
import Apple_iPhone_16_Pro_Max from "../products-assets/Apple iPhone 16 Pro Max.png";
import OPPO_Reno12_Pro_5G from "../products-assets/OPPO Reno12 Pro 5G.png";
import Xiaomi_14T from "../products-assets/Xiaomi 14T.png";
import Vivo_V40 from "../products-assets/Vivo V40.png";
import Realme_12_Pro_5G from "../products-assets/Realme 12 Pro+ 5G.png";
import Nothing_Phone_2 from "../products-assets/Nothing Phone 2.png";
import iPad_Air_Pro from "../products-assets/iPad Air Pro.png";
import AURALIS_PRIMO_Q1 from "../products-assets/AURALIS PRIMO Q1.png";
import Airpods_Max_Midnight from "../products-assets/Airpods Max Midnight.png";
import HyperX_QuadCast_Microphone from "../products-assets/HyperX QuadCast Gaming Microphone.png";

const Products = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  // Sale modal state
  const [showSaleModal, setShowSaleModal] = useState(false);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (showSaleModal) {
      const interval = setInterval(() => {
        const now = new Date();
        const saleDate = new Date("2024-12-21T00:00:00");
        const targetDate = new Date("2024-12-25T00:00:00");
        const remainingTime = targetDate - now;

        if (remainingTime <= 0) {
          clearInterval(interval);
          return;
        }

        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        setCountdown({ days, hours, minutes, seconds });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [showSaleModal]);

  const products = [
    {
      id: 1,
      name: "TUF Gaming VG27VQ",
      price: 14995.0,
      rating: 4,
      category: "Computers",
      image: TUF_Gaming_VG27VQ,
    },
    {
      id: 2,
      name: "Apple MacBook Air",
      price: 69990.0,
      rating: 4,
      category: "Computers",
      image: Apple_MacBook_Air,
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      price: 84990.0,
      rating: 4,
      category: "Smartphones",
      image: Samsung_Galaxy_S24_Ultra,
    },
    {
      id: 4,
      name: "Brother Printer",
      price: 8350.0,
      rating: 4,
      category: "Peripherals",
      image: Brother_Printer,
    },
    {
      id: 5,
      name: "iPhone 11 Pro Max",
      price: 1287.41,
      rating: 4,
      category: "Smartphones",
      image: iPhone_11_Pro_Max,
    },
    {
      id: 6,
      name: "Logitech G413 Mechanical Keyboard",
      price: 4926.09,
      rating: 4,
      category: "Peripherals",
      image: Logitech_G413_Keyboard,
    },
    {
      id: 7,
      name: "Redragon M601-3 Centrophorus Mouse",
      price: 960.0,
      rating: 4,
      category: "Peripherals",
      image: Redragon_M601_Mouse,
    },
    {
      id: 8,
      name: "HyperX Cloud Alpha Wireless Headset",
      price: 8450.0,
      rating: 4,
      category: "Peripherals",
      image: HyperX_Cloud_Alpha,
    },
    {
      id: 9,
      name: "Dell Inspiron 3910 Intel Desktop",
      price: 66490.0,
      rating: 3,
      category: "Computers",
      image: Dell_Inspiron_3910,
    },
    {
      id: 10,
      name: "ASUS 340MC",
      price: 41995.0,
      rating: 5,
      category: "Computers",
      image: ASUS_340MC,
    },
    {
      id: 11,
      name: "Dell Inspiron 15.6 FHD Laptop",
      price: 55814.0,
      rating: 4,
      category: "Computers",
      image: Dell_Inspiron_Laptop,
    },
    {
      id: 12,
      name: "ASUS Laptop L150 Ultimate",
      price: 18378.88,
      rating: 5,
      category: "Computers",
      image: ASUS_Laptop_L150,
    },
    {
      id: 13,
      name: "HP Slim 27 Desktop Bundle",
      price: 60738.0,
      rating: 5,
      category: "Computers",
      image: HP_Slim_27_Bundle,
    },
    {
      id: 14,
      name: "Lenovo ThinkPad E16",
      price: 41165.0,
      rating: 5,
      category: "Computers",
      image: Lenovo_ThinkPad_E16,
    },
    {
      id: 15,
      name: "SAMSUNG Galaxy Book",
      price: 99829.99,
      rating: 4,
      category: "Computers",
      image: SAMSUNG_Galaxy_Book,
    },
    {
      id: 16,
      name: "Apple iPhone 16 Pro Max",
      price: 69990.0,
      rating: 4,
      category: "Smartphones",
      image: Apple_iPhone_16_Pro_Max,
    },
    {
      id: 17,
      name: "OPPO Reno12 Pro 5G",
      price: 84990.0,
      rating: 4,
      category: "Smartphones",
      image: OPPO_Reno12_Pro_5G,
    },
    {
      id: 18,
      name: "Xiaomi 14T",
      price: 27999.0,
      rating: 4,
      category: "Smartphones",
      image: Xiaomi_14T,
    },
    {
      id: 19,
      name: "Vivo V40",
      price: 26999.0,
      rating: 3,
      category: "Smartphones",
      image: Vivo_V40,
    },
    {
      id: 20,
      name: "Realme 12 Pro+ 5G",
      price: 25999.0,
      rating: 5,
      category: "Smartphones",
      image: Realme_12_Pro_5G,
    },
    {
      id: 21,
      name: "Nothing Phone 2",
      price: 93766.0,
      rating: 5,
      category: "Smartphones",
      image: Nothing_Phone_2,
    },
    {
      id: 22,
      name: "iPad Air Pro",
      price: 72990.0,
      rating: 5,
      category: "Smartphones",
      image: iPad_Air_Pro,
    },
    {
      id: 23,
      name: "AURALIS PRIMO Q1",
      price: 1299.0,
      rating: 5,
      category: "Peripherals",
      image: AURALIS_PRIMO_Q1,
    },
    {
      id: 24,
      name: "Airpods Max Midnight",
      price: 32500.0,
      rating: 4,
      category: "Peripherals",
      image: Airpods_Max_Midnight,
    },
    {
      id: 25,
      name: "HyperX QuadCast Gaming Microphone",
      price: 5995.0,
      rating: 4,
      category: "Peripherals",
      image: HyperX_QuadCast_Microphone,
    },
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const openModal = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setAddedToCart(false);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setAddedToCart(false);
  };

  const openSaleModal = () => {
    setShowSaleModal(true);
  };

  const closeSaleModal = () => {
    setShowSaleModal(false);
  };

  const handleAddToCart = () => {
    addToCart({ ...selectedProduct, quantity });
    setAddedProduct(selectedProduct.name);
    setAddedToCart(true);

    // Automatically close the modal after 3 seconds
    setTimeout(() => {
      setSelectedProduct(null);
    }, 3000);
  };

  return (
    <div className="products-page">
      <div className="filter-buttons">
        {["All", "Computers", "Smartphones", "Peripherals"].map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sale Modal */}
      {showSaleModal && (
        <div className="sale-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeSaleModal}>
              X
            </button>
            <h3>Don't miss out on our 12.25 Sale!</h3>
            <div className="countdown-timer">
              <p>{countdown.days} Days</p>
              <p>{countdown.hours} Hours</p>
              <p>{countdown.minutes} Minutes</p>
              <p>{countdown.seconds} Seconds</p>
            </div>
            <button className="start-shopping-btn" onClick={closeSaleModal}>
              Start Shopping
            </button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="product-grid">
        {filteredProducts.slice(0, 8).map((product) => (
          <div key={product.id} className="product-card">
            <Link
              to={`/product/${product.id}`}
              className="product-link"
              onClick={openSaleModal}
            >
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
            </Link>
            <h3>{product.name}</h3>
            <div className="product-info">
              <div className="product-price-rating">
                <p className="product-price">₱{product.price}</p>
                <p className="product-rating">{"⭐".repeat(product.rating)}</p>
              </div>
            </div>
            <div className="buttons-container">
              <button
                onClick={() => openModal(product)}
                className="add-to-cart-btn"
              >
                Add to Cart
              </button>
              <button
                onClick={() => openModal(product)}
                className="buy-now-btn"
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && !addedToCart && (
        <div className="product-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              X
            </button>
            <h3>{selectedProduct.name}</h3>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="modal-product-image"
            />
            <div className="product-info">
              <p className="product-price">
                ₱{(selectedProduct.price * quantity).toFixed(2)}
              </p>
            </div>
            <div className="quantity-controls">
              <button
                onClick={() => setQuantity(quantity - 1)}
                className="quantity-btn decrement-btn"
              >
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="quantity-btn increment-btn"
              >
                +
              </button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {/* Added to Cart Message */}
      {addedToCart && (
        <div className="added-to-cart-message">
          <p>{addedProduct} has been added to your cart!</p>
        </div>
      )}
    </div>
  );
};

export default Products;

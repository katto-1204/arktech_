import React, { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import "../CSS/NavBar.css";
import logo from "../assets/LOGO.png";
import hoverSound from "../assets/hover.mp3";

const NavBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const hoverAudio = useRef(new Audio(hoverSound));

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchQuery) {
      console.log("Searching for: ", searchQuery);
    }
  };

  const handleAddToCart = () => {
    setIsModalOpen(false);
    setShowConfirmation(true);
    setTimeout(() => setFadeOut(true), 1000);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  const playHoverSound = () => {
    hoverAudio.current.play();
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            activeClassName="active-link"
            end
            onMouseEnter={playHoverSound}
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            activeClassName="active-link"
            onMouseEnter={playHoverSound}
          >
            PRODUCTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/ourteam"
            activeClassName="active-link"
            onMouseEnter={playHoverSound}
          >
            ARKITECHS
          </NavLink>
        </li>
      </ul>
      <div className="cart-login-icons">
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search products..."
            className="search-box"
          />
        </form>
        <Link to="/cart">
          <span className="icon">🛒</span>
        </Link>
        <Link to="/profile">
          <span className="icon">👤</span>
        </Link>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Product Title</h2>
            <p>Product details...</p>
            <button className="add-to-cart" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className={`confirmation-message ${fadeOut ? "fade-out" : ""}`}>
          Item added to cart!
        </div>
      )}
    </nav>
  );
};

export default NavBar;

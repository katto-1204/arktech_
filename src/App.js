import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import EmptyCart from "./components/EmptyCart";
import PlaceOrder from "./components/PlaceOrder";
import OurTeam from "./components/OurTeam";
import Login from "./components/Login";
import Register from "./components/Register"; // Default import
import Profile from "./components/Profile";
import { products } from "./components/Products";
import "./CSS/App.css";

const App = () => {
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);

  // Cart management functions
  const addToCart = (product, quantity) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);
    if (existingItemIndex >= 0) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [
        ...prevCart,
        { ...product, quantity: quantity || 1 },
      ]);
    }
  };

  const updateQuantity = (itemId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  // Login and Logout functions
  const handleLogin = () => {
    setIsLoggedIn(true); // Update login state
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Log out the user
  };

  return (
    <Router>
      <NavBar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<Products addToCart={addToCart} products={products} />}
        />
        <Route
          path="/productdetails"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/place-order" element={<PlaceOrder cartItems={cart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cart}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route path="/empty-cart" element={<EmptyCart />} />
        <Route path="/ourteam" element={<OurTeam />} />
        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
              hasAccount={hasAccount}
              setHasAccount={setHasAccount}
            />
          }
        />
        <Route
          path="/register"
          element={<Register setHasAccount={setHasAccount} />}
        />
        <Route
          path="/profile"
          element={
            <Profile isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;

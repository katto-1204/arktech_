import React, { useState } from "react";
import CountUp from "react-countup";
import Login from "./Login";
import Register from "./Register";
import "../CSS/Profile.css";
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaRegSun,
  FaLightbulb,
} from "react-icons/fa"; // Social Icons

const Profile = ({ isLoggedIn, setIsLoggedIn }) => {
  const [hasAccount, setHasAccount] = useState(true);
  const [profilePicture, setProfilePicture] = useState(null);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [bio, setBio] = useState("Tech Enthusiast | AI Developer | Futurist");
  const [theme, setTheme] = useState("light");
  const [progress, setProgress] = useState(75);

  const orders = [
    { id: 1, name: "Gaming Headset", status: "Delivered" },
    { id: 2, name: "Wireless Mouse", status: "In Transit" },
  ];
  const wishlist = ["Smartwatch", "Noise-Cancelling Headphones"];
  const savedPayment = "**** **** **** 1234";
  const savedAddress = "123 Tech Street, Cityville";

  const handleLogout = () => setIsLoggedIn(false);
  const handlePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfilePicture(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  if (!isLoggedIn) {
    return hasAccount ? (
      <Login setIsLoggedIn={setIsLoggedIn} setHasAccount={setHasAccount} />
    ) : (
      <Register setHasAccount={setHasAccount} />
    );
  }

  return (
    <div className={`profile ${theme}`}>
      <div className="profile-container">
        <div className="header">
          <h1>HELLO!</h1>
          {/* Dark Mode Toggle */}
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === "light" ? (
              <FaRegSun size={20} />
            ) : (
              <FaLightbulb size={20} />
            )}
          </button>
        </div>

        {/* Profile Picture */}
        <div className="profile-picture">
          <div className="profile-pic-container">
            <img
              src={profilePicture || "https://via.placeholder.com/200"}
              alt="Profile"
              className="profile-pic"
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handlePictureChange}
            className="upload-pic"
          />
        </div>

        {/* Personal Info */}
        <div className="personal-info">
          <h2>Personal Info</h2>
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Bio:</strong> {bio}
          </p>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>

        {/* Profile Completion */}
        <div className="profile-completion">
          <h3>Profile Completion</h3>
          <div className="progress-bar">
            <div className="progress" style={{ width: `${progress}%` }}></div>
          </div>
          <p>{progress}% Complete</p>
        </div>

        {/* Order History */}
        <div className="order-history">
          <h2>Order History</h2>
          <ul>
            {orders.map((order) => (
              <li key={order.id} className="order-item">
                <p>
                  {order.name} - <strong>{order.status}</strong>
                </p>
              </li>
            ))}
          </ul>
          <p>
            Total Orders: <CountUp start={0} end={orders.length} duration={1} />
          </p>
        </div>

        {/* Wishlist */}
        <div className="wishlist">
          <h2>Wishlist</h2>
          <ul>
            {wishlist.map((item, index) => (
              <li key={index} className="wishlist-item">
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Profile Stats */}
        <div className="profile-stats">
          <h3>Profile Statistics</h3>
          <p>Total Spend: $1000</p>
          <p>Most Purchased Category: Electronics</p>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={30} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>

        {/* Logout Button */}
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;

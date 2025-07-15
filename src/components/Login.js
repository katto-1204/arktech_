import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";

const Login = ({ setIsLoggedIn }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate("/profile");
  };

  return (
    <div className="login-container">
      <div className="logo">🔵</div>
      <h2>Welcome Back</h2>
      <p>
        Don't have an account yet?{" "}
        <a
          href="#"
          className="signup-link"
          onClick={() => navigate("/register")}
        >
          Sign up
        </a>
      </p>

      <div className="login-form">
        <input type="email" placeholder="Email address" required />
        <div className="password-field">
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            required
          />
          <span onClick={togglePasswordVisibility} className="eye-icon">
            {passwordVisible ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        <div className="alternative-login">
          <p>OR</p>
          <button className="apple-btn">Continue with Apple</button>
          <button className="google-btn">Continue with Google</button>
          <button className="twitter-btn">Continue with Twitter</button>
        </div>
        <a href="#" className="forgot-password">
          Forgot password?
        </a>
      </div>
    </div>
  );
};

export default Login;

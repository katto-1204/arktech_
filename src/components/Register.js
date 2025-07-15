import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../CSS/Register.css";

const Register = () => {
  // State for form data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate(); // Initialize navigate function

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle form submission
  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Basic validation (you can extend this)
    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    // Assuming successful registration
    navigate("/login"); // Redirect to login page after registration

    // Optionally, reset form after registration
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>START FOR FREE</h2>
        <h3>Create new account.</h3>
        <p>
          Already a Member?{" "}
          <a href="#" onClick={() => navigate("/login")}>
            Log In
          </a>
        </p>

        <form className="register-form" onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-field">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span onClick={togglePasswordVisibility} className="eye-icon">
              {passwordVisible ? "👁️" : "👁️‍🗨️"}
            </span>
          </div>
          <button type="submit" className="register-btn">
            Create Account
          </button>
        </form>
      </div>

      <div className="image-section">
        <img src="path_to_your_image" alt="Scenic view" />
      </div>
    </div>
  );
};

export default Register;

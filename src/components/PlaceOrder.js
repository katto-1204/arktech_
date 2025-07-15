import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../CSS/PlaceOrder.css";

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location || {};
  const cartItems = state?.cartItems || [];
  const totalAmount = state?.totalAmount || 0;

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryInstructions: "",
    paymentMethod: "card",
    paymentDetails: {
      cardNumber: "",
      cardExpiry: "",
      cardCVV: "",
    },
    deliveryMethod: "standard",
    orderNotes: "",
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [waybill, setWaybill] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      paymentDetails: {
        ...prev.paymentDetails,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", customerInfo);
    setOrderPlaced(true);
    generateWaybill();
  };

  const generateWaybill = () => {
    const orderNumber = Math.floor(Math.random() * 1000000);
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 5);

    setWaybill({
      orderNumber,
      deliveryDate: deliveryDate.toLocaleDateString(),
      deliveryMethod: customerInfo.deliveryMethod,
    });
  };

  const handleShowReceipt = () => {
    setShowReceipt(true);
  };

  const handleHideReceipt = () => {
    setShowReceipt(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="place-order">
        <p>No items in cart!</p>
        <button onClick={() => navigate("/cart")}>Go Back to Cart</button>
      </div>
    );
  }

  return (
    <div className="place-order-page">
      <h1>Place Order</h1>
      <h3>Total: ₱{totalAmount.toFixed(2)}</h3>

      {orderPlaced ? (
        <div className="waybill">
          <h2>Waybill</h2>
          <p>
            <strong>Order Number:</strong> {waybill.orderNumber}
          </p>
          <p>
            <strong>Delivery Method:</strong> {waybill.deliveryMethod}
          </p>
          <p>
            <strong>Estimated Delivery Date:</strong> {waybill.deliveryDate}
          </p>
          <div className="waybill-actions">
            <button onClick={() => navigate("/")}>Go to Home</button>
            <button onClick={handleShowReceipt}>Show Receipt</button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <h4>Customer Information</h4>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={customerInfo.name}
              onChange={handleInputChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={customerInfo.email}
              onChange={handleInputChange}
              required
            />
            <label>Phone (optional)</label>
            <input
              type="tel"
              name="phone"
              value={customerInfo.phone}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <h4>Delivery Address</h4>
            <label>Full Address</label>
            <textarea
              name="address"
              value={customerInfo.address}
              onChange={handleInputChange}
              required
            />
            <label>Delivery Instructions (optional)</label>
            <textarea
              name="deliveryInstructions"
              value={customerInfo.deliveryInstructions}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <h4>Payment Information</h4>
            <label>Payment Method</label>
            <select
              name="paymentMethod"
              value={customerInfo.paymentMethod}
              onChange={handleInputChange}
            >
              <option value="card">Card</option>
              <option value="wallet">Digital Wallet</option>
              <option value="bank">Bank Transfer</option>
              <option value="cash">Cash on Delivery</option>
            </select>

            {customerInfo.paymentMethod === "card" && (
              <div>
                <label>Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={customerInfo.paymentDetails.cardNumber}
                  onChange={handlePaymentChange}
                  required
                />
                <label>Expiry Date</label>
                <input
                  type="text"
                  name="cardExpiry"
                  value={customerInfo.paymentDetails.cardExpiry}
                  onChange={handlePaymentChange}
                  required
                />
                <label>CVV</label>
                <input
                  type="text"
                  name="cardCVV"
                  value={customerInfo.paymentDetails.cardCVV}
                  onChange={handlePaymentChange}
                  required
                />
              </div>
            )}
          </div>

          <div>
            <h4>Delivery Method</h4>
            <label>Estimated Delivery Time</label>
            <select
              name="deliveryMethod"
              value={customerInfo.deliveryMethod}
              onChange={handleInputChange}
            >
              <option value="standard">Standard</option>
              <option value="express">Express</option>
            </select>
          </div>

          <div>
            <h4>Additional Information</h4>
            <label>Order Notes (optional)</label>
            <textarea
              name="orderNotes"
              value={customerInfo.orderNotes}
              onChange={handleInputChange}
            />
          </div>

          <div className="order-summary">
            <h4>Order Summary</h4>
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <p>
                    {item.name} x {item.quantity}
                  </p>
                  <p>₱{item.price.toFixed(2)}</p>
                </li>
              ))}
            </ul>
            <p>
              <strong>Total: ₱{totalAmount.toFixed(2)}</strong>
            </p>
          </div>

          <button type="submit">Place Order</button>
        </form>
      )}

      <div className="customer-support">
        <p>
          Need help? <a href="/support">Contact Support</a> |{" "}
          <a href="/faq">FAQs</a>
        </p>
      </div>

      {showReceipt && (
        <div className="receipt-modal">
          <h1>ArkTech Order Receipt</h1>
          <p>
            <strong>Order Number:</strong> {waybill?.orderNumber}
          </p>
          <p>
            <strong>Customer:</strong> {customerInfo.name}
          </p>
          <p>
            <strong>Email:</strong> {customerInfo.email}
          </p>
          <p>
            <strong>Phone:</strong> {customerInfo.phone}
          </p>
          <p>
            <strong>Address:</strong> {customerInfo.address}
          </p>
          <p>
            <strong>Delivery Instructions:</strong>{" "}
            {customerInfo.deliveryInstructions}
          </p>

          <h4>Order Summary</h4>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} x {item.quantity} - ₱{item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p>
            <strong>Total:</strong> ₱{totalAmount.toFixed(2)}
          </p>

          <h4>Waybill</h4>
          <p>
            <strong>Delivery Method:</strong> {waybill?.deliveryMethod}
          </p>
          <p>
            <strong>Estimated Delivery Date:</strong> {waybill?.deliveryDate}
          </p>

          <footer>
            <p>Thank you for shopping with ArkTech!</p>
            <button onClick={handleHideReceipt}>Close Receipt</button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;

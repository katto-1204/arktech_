import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "../CSS/Home.css";
import airpods from "../assets/airpods.gif";
import auralis from "../assets/auralisshome.gif";
import iphone from "../assets/iphone.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import swipeSound from "../assets/swipe.wav";

const Home = () => {
  const swipeAudio = useRef(new Audio(swipeSound));

  const handleSlideChange = () => {
    swipeAudio.current.play();
  };

  return (
    <div className="home-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className="image-container">
            <img
              src={auralis}
              alt="Auralis Primo Q1"
              className="aproduct-image"
            />
          </div>
          <div className="content">
            <div className="text-content">
              <h1 className="product-title">AURALIS PRIMO Q1</h1>
              <p className="tagline">Keep The Noise Out, or In. You Choose.</p>
              <p className="price">
                ₱999.00 <span className="original-price">₱1299.00</span>
              </p>
              <p className="rating">★★★★★</p>
              <Link to="/productdetails">
                <button className="shop-button">Shop Now</button>
              </Link>
              <h1 className="background-text">Over Ear</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="image-container">
            <img
              src={iphone}
              alt="iPhone 16 Pro Max"
              className="aproduct-image"
            />
          </div>
          <div className="content">
            <div className="text-content">
              <h1 className="product-title">iPHONE 16 PRO MAX</h1>
              <p className="tagline">
                Experience tomorrow, today—technology at your command.
              </p>
              <p className="price">₱48,900.00</p>
              <p className="rating">★★★★★</p>
              <Link to="/products">
                <button className="shop-button">View Products</button>
              </Link>
              <h1 className="abackground-text">Astral</h1>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="image-container">
            <img
              src={airpods}
              alt="Airpods Pro Max"
              className="aproduct-image"
            />
          </div>
          <div className="content">
            <div className="text-content">
              <h1 className="product-title">AIRPODS PRO MAX</h1>
              <p className="tagline">
                Immerse Yourself, Experience Sound Like Never Before.
              </p>
              <p className="price">₱48,900.00</p>
              <p className="rating">★★★★★</p>
              <Link to="/products">
                <button className="shop-button">View Products</button>
              </Link>
              <h1 className="bbackground-text">Sublime</h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;

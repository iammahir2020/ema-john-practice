import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/shop");
  };
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to Ema-John Shopping</h1>
      <button onClick={handleClick} className="home-button">
        Enter Shop
      </button>
    </div>
  );
};

export default Home;

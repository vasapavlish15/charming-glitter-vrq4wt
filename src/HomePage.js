import React from "react";
import "../src";
import ProductList from "./ProductList"; // Імпорт компоненту зі списком товарів

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="content">
        <img src="/path/to/your/image.jpg" alt="Home Page" />
        <h2>Заголовок</h2>
        <p>Підзаголовок з інформацією про сайт та актуальні новини.</p>
      </div>
    </div>
  );
};

export default HomePage;

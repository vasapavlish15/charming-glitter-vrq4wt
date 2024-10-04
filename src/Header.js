import React from "react";
import "../src"; // Для підключення стилів

const Header = () => {
  return (
    <header className="header">
      <div className="logo">GreenGarden</div>
      <nav className="nav">
        <a href="#">Про нас</a>
        <a href="#">Контакти</a>
        <a href="#">Кабінет</a>
        <div className="cart">
          <a href="#">
            <span role="img" aria-label="cart">
              🛒
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import CartModal from "./CartModal"; // Імпорт модального вікна
import "../src";

const ProductList = () => {
  const [cartItem, setCartItem] = useState(null); // Стан для зберігання вибраного товару
  const products = [
    {
      id: 1,
      name: "Товар 1",
      description: "Опис товару 1",
      price: 29.99,
      image: "/path/to/your/image1.jpg",
    },
    {
      id: 2,
      name: "Товар 2",
      description: "Опис товару 2",
      price: 39.99,
      image: "/path/to/your/image2.jpg",
    },
    {
      id: 3,
      name: "Товар 3",
      description: "Опис товару 3",
      price: 19.99,
      image: "/path/to/your/image3.jpg",
    },
  ];

  const handleAddToCart = (product) => {
    setCartItem(product); // Встановлюємо вибраний товар для модального вікна
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={handleAddToCart}
        />
      ))}
      {cartItem && (
        <CartModal product={cartItem} onClose={() => setCartItem(null)} />
      )}{" "}
      {/* Відображаємо модальне вікно, якщо товар вибрано */}
    </div>
  );
};

export default ProductList;

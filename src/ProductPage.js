import React from "react";
import ProductList from "./ProductList"; // Імпорт компоненту зі списком товарів
import "../src"; // Для стилізації

const ProductsPage = () => {
  return (
    <div className="products-page">
      <h2>Наші товари</h2>
      <ProductList />
    </div>
  );
};

export default ProductsPage;

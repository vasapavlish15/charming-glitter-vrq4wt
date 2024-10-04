import React from 'react';
import { useNavigate } from 'react-router-dom'; // Імпорт для переходу
import '../src';

const CartModal = ({ product, onClose }) => {
  const navigate = useNavigate(); // Ініціалізуємо навігатор
  const totalPrice = product.price; // Загальна сума

  const handleCheckout = () => {
    onClose(); // Закриваємо модальне вікно
    navigate('/checkout'); // Переходимо на сторінку оформлення
  };

  return (
    <div className="cart-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Корзина</h2>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>Ціна: ${product.price}</p>
        <p>Загальна сума: ${totalPrice}</p>
        <div className="modal-buttons">
          <button onClick={onClose}>Продовжити покупки</button>
          <button onClick={handleCheckout}>Оформити замовлення</button> {/* Оновлено для переходу на нову сторінку */}
        </div>
      </div>
    </div>
  );
};

export default CartModal;

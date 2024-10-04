import React from "react";
import "../src"; // Для стилізації

const CheckoutPage = ({ cartItems, onConfirmOrder }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0); // Загальна сума

  return (
    <div className="checkout-page">
      <h2>Оформлення замовлення</h2>
      <div className="order-details">
        <h3>Ваші товари:</h3>
        {cartItems.map((item) => (
          <div key={item.id} className="order-item">
            <img src={item.image} alt={item.name} />
            <div className="order-info">
              <h4>{item.name}</h4>
              <p>Ціна: ${item.price}</p>
            </div>
          </div>
        ))}
        <h3>Загальна сума: ${totalPrice}</h3>
      </div>

      <div className="contact-info">
        <h3>Контактні дані:</h3>
        <input type="text" placeholder="Ім'я" required />
        <input type="email" placeholder="Електронна пошта" required />
      </div>

      <div className="delivery-info">
        <h3>Адреса доставки:</h3>
        <input type="text" placeholder="Вулиця, номер будинку" required />
        <input type="text" placeholder="Місто" required />
        <input type="text" placeholder="Поштовий індекс" required />
      </div>

      <div className="delivery-method">
        <h3>Спосіб доставки:</h3>
        <select>
          <option value="courier">Кур'єр</option>
          <option value="pickup">Самовивіз</option>
          <option value="postal">Пошта</option>
        </select>
      </div>

      <div className="checkout-buttons">
        <button onClick={onConfirmOrder}>Підтвердити замовлення</button>
        <button>Продовжити покупки</button>
      </div>
    </div>
  );
};

export default CheckoutPage;

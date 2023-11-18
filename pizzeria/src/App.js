import React from 'react';
import './styles.css';
import PizzaLogo from './logo.svg';
import Menu from './Menu';
import Drinks from './Drinks';
const { drinks, renderDrinks } = require('./Drinks');
const { menu, renderMenu } = require('./Menu');

// Здесь вы будете использовать функции для отображения напитков и меню на странице
const openOrderForm = () => {
    // Здесь можно добавить логику для открытия формы
    document.getElementById('orderForm').style.display = 'block';
};

const closeOrderForm = () => {
    // Здесь можно добавить логику для закрытия формы
    document.getElementById('orderForm').style.display = 'none';
};

const submitOrder = () => {
    // Здесь можно добавить логику для обработки отправки заказа
    console.log('Order submitted');
};
function App() {
  return (
      <div>
        <header className="retro-style">
          <div className="logo">
            <img src={PizzaLogo} alt="Логотип пиццерии" />
          </div>
          <nav>
            <ul>
              <li><a href="#menu">Меню</a></li>
              <li><a href="#about">О нас</a></li>
              <li><a href="basket.html">Корзина</a></li>
            </ul>
          </nav>
        </header>

        <section id="menu-container" className="retro-style">
          <h2>Меню</h2>
          <Menu />
        </section>

          <div id="orderForm" className="modal" style={{ display: 'none' }}>
              <div className="modal-content">
                  <span className="close" onClick={closeOrderForm}>&times;</span>
                  <h2>Введите ваш адрес и номер телефона</h2>
                  <input type="text" placeholder="Адрес: Город, улица, дом," />
                  <input type="tel" placeholder="Номер телефона: +7 (XXX) XXX-XX-X" />
                  <button onClick={submitOrder} className="payment-button">Оплатить</button>
              </div>
          </div>
          <button onClick={openOrderForm}>Открыть форму</button>

        <section id="drinks-container" className="retro-style">
          <h2>Напитки</h2>
          <Drinks />
        </section>

        <footer className="retro-style">
          <p>&copy; 2023 Пиццерия "Вкусняшка"</p>
        </footer>
      </div>
  );
}
renderDrinks();
renderMenu();
export default App;

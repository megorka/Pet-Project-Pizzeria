const { connection } = require('./DB');
const { drinks, renderDrinks } = require('./drinks');
const { menu, renderMenu } = require('./menu');

// Здесь вы будете использовать функции для отображения напитков и меню на странице
renderDrinks();
renderMenu();

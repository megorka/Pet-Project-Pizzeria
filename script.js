
function openOrderForm() {
    document.getElementById("orderForm").style.display = "block";
}

function closeOrderForm() {
    document.getElementById("orderForm").style.display = "none";
}
var drinks = [
    {
        name: 'Кола',
        image: 'cola.jpg',
        price: 150
    },
    {
        name: 'Кола',
        image: 'cola.jpg',
        price: 150
    },
    // Добавьте другие напитки сюда
];
var menu = [
    {
        name: 'Пепперони',
        image: 'pepperoni.jpg',
        price: 150
    },
    {
        name: 'Мацарелла',
        image: 'mazarella.jpg',
        price: 150
    },
    // Добавьте другие напитки сюда
];

function renderDrinks() {
    var drinksContainer = document.getElementById('drinks-container');

    drinks.forEach(function(drink) {
        var drinkItem = document.createElement('div');
        drinkItem.classList.add('menu-item');

        var img = document.createElement('img');
        img.src = drink.image;
        img.alt = drink.name;

        var name = document.createElement('h3');
        name.textContent = drink.name;

        var price = document.createElement('p');
        price.textContent = 'Цена: ' + drink.price + ' руб.';

        var buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Купить';
        buyButton.onclick = function () {
            openOrderForm();
        };

        drinkItem.appendChild(img);
        drinkItem.appendChild(name);
        drinkItem.appendChild(price);
        drinkItem.appendChild(buyButton);

        drinksContainer.appendChild(drinkItem);
    });
}
function renderMenu() {
    var menuContainer = document.getElementById('menu-container');

    menu.forEach(function(menu) {
        var menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        var img = document.createElement('img');
        img.src = menu.image;
        img.alt = menu.name;

        var name = document.createElement('h3');
        name.textContent = menu.name;

        var price = document.createElement('p');
        price.textContent = 'Цена: ' + menu.price + ' руб.';

        var buyButton = document.createElement('button');
        buyButton.classList.add('buy-button');
        buyButton.textContent = 'Купить';
        buyButton.onclick = function () {
            openOrderForm();
        };

        menuItem.appendChild(img);
        menuItem.appendChild(name);
        menuItem.appendChild(price);
        menuItem.appendChild(buyButton);

        menuContainer.appendChild(menuItem);
    });
}
// Вызов функции для отображения напитков на странице
renderDrinks();
renderMenu();

var drinks = [
    {
        name: 'Кола',
        image: 'cola.jpg',
        price: 150
    },
    // Добавьте другие напитки сюда
];

function openOrderForm() {
    document.getElementById("orderForm").style.display = "block";
}

function closeOrderForm() {
    document.getElementById("orderForm").style.display = "none";
}

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

module.exports = { drinks, renderDrinks };

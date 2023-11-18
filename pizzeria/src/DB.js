const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'pizzeria'
});

connection.connect((err) => {
    if (err) {
        console.error('Ошибка подключения: ' + err.stack);
        return;
    }
    console.log('Подключение к базе данных установлено');
});

// здесь могут быть другие функции для работы с базой данных

connection.end((err) => {
    if (err) {
        console.error('Ошибка закрытия соединения: ' + err.stack);
        return;
    }
    console.log('Соединение с базой данных закрыто');
});

module.exports = { connection };

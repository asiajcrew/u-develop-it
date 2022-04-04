const mysql = require('mysql2');

// Connect to SQL database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Janay0810!$',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

module.exports = db;
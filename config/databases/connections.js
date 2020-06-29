var mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

var connMySql = function() {
    return mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: 'portal_noticias'
    });
}

module.exports = function() {
    return connMySql;
}

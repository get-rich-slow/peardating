const db = require('../connection');
const { Sequelize } = db;

const User = conn.define('user', {
    first_name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    age: Sequelize.INTEGER,
    gender: Sequelize.CHAR
});

module.exports = User



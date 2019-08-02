const db = require("../connection");
const { Sequelize } = db;

const Chat = db.define("chat", {
});

module.exports = Chat;

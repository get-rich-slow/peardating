const db = require ('../connection')
const { Sequelize } = db;

const Message = db.define('message', {
    text: {
        type: Sequelize.TEXT
    }
})

module.exports = Message
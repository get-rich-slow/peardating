const db = require("../connection");
const { Sequelize } = db;

const Pair = db.define("pair", {
  matchType: {
    type: Sequelize.INTEGER,
  },
  availableToMatch: {
    type: Sequelize.BOOLEAN
  }
});

module.exports = Pair;

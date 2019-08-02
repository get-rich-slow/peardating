const db = require("../connection");
const { Sequelize } = db;

const User = db.define("user", {
  age: {
    type: Sequelize.INTEGER,
    validate: {
      min: 18
    }
  },
  race: {
    type: Sequelize.STRING
    //convert to ENUM, choose races
  },
  sex: {
    type: Sequelize.STRING
    //choose sexes
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING
    //validate for length??
  },
  isAdmin: {
    type: Sequelize.BOOLEAN
  },
  heightInInches: {
    type: Sequelize.INTEGER
  },
  orientation: {
    type: Sequelize.STRING
  },
  eyeColor: {
    type: Sequelize.STRING
    //convert to ENUM
  },
  hairColor: {
    type: Sequelize.STRING
  },
  bodyType: {
    type: Sequelize.STRING
    //convert to ENUM
  },
  facePic: {
    type: Sequelize.STRING,
    validate: {
      isUrl: true
    }
  },
  chibiFacePic: {
    type:Sequelize.STRING,
    validate: {
        isUrl: true
      }
  }
});

module.exports = User;

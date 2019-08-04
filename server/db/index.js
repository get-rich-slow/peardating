const db = require("./connection.js");
const { Message, Pair, User, Chat } = require("./models");
const {
  fakeMessages,
  fakeChats,
  fakeChatusers,
  fakePairs,
  fakeUsers,
} = require("./seeds");

//define models relations here

User.belongsTo(Pair)
Pair.hasMany(User)

User.belongsToMany(Chat, {through: 'chatusers'})
Chat.belongsToMany(User, {through: 'chatusers'})

Message.belongsTo(Chat)
Chat.hasMany(Message)

Message.belongsTo(User)
User.hasMany(Message)


const syncAndSeed = () => {
  return db.sync({ force: true }).then(() => {
    return Promise.all([
      fakeMessages.map(fakeMessage => {
        Message.create({ text: fakeMessage.text });
      }),
      fakeUsers.map(fakeUser => {
        User.create(fakeUser);
      })
    ]);
  });
};

module.exports = { syncAndSeed };

const db = require("./connection.js");
const { Message, Chatuser, Pair, User, Chat } = require("./models");
const {
  fakeMessages,
  fakeChats,
  fakeChatusers,
  fakePairs,
  fakeUser
} = require("./seeds");

//define models relations here

const syncAndSeed = () => {
  return db.sync({ force: true }).then(() => {
    return Promise.all(
      fakeMessages.map(fakeMessage => {
        console.log(fakeMessage.text)
        Message.create({ text: fakeMessage.text });
      })
    );
  });
};

module.exports = { syncAndSeed };

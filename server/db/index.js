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
    fakeMessages.map(fakeMessage => {
      Message.create({ text: fakeMessage.text });
    });
  });
};

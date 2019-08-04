const messageRouter = require("express").Router();
const { Message } = require("../db/models/");

messageRouter.get("/:messageId", (req, res, next) => {
  Message.findOne({
    where: { id: `${req.params.messageId}` }
  })
    .then(message => {
      res.json(message);
    })
    .catch(next);
});

messageRouter.get("/", (req, res, next) => {
  Message.findAll()
    .then(messages => {
      res.json(messages );
    })
    .catch(next);
});

// router.post("/", (req, res, next) => {
//   User.create({
//     where: { facebookId: `${req.params.fbUserID}` },
//     defaults: { name: `${req.body.name}` },
//     include: [Entry]
//   })
//     .then(([user, created]) => {
//       res.json(user);
//     })
//     .catch(next);
// });

module.exports = { messageRouter };

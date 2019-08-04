const userRouter = require("express").Router();
const { User } = require("../db/models");

userRouter.get("/:messageId", (req, res, next) => {
  User.findOne({
    where: { id: `${req.params.messageId}` }
  })
    .then(user => {
      res.json(user);
    })
    .catch(next);
});

userRouter.get("/", (req, res, next) => {
  User.findAll()
    .then(users => {
      res.json(users);
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

module.exports = { userRouter };

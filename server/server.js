const { syncAndSeed } = require("./db");
const app = require("./app");
const PORT = process.env.PORT || 1337;
/*
syncAndSeed()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`listening on http://localhost:${PORT}`)
    );
  })
  .catch(error => console.log(error));
*/
const server = 
app
  .listen(PORT, () => {
    console.log(`listening on http://localhost:${PORT}`);
  });

const io = require("socket.io")(server);

io.on("connection", (socket) => {
  socket.on("syncAndSeed", (msg) => {
    syncAndSeed()
      .then(() => {
        io.emit("syncAndSeed done");
      })
      .catch(error => console.log(error));
  });
});

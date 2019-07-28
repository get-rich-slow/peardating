const { syncAndSeed } = require("./db");
const app = require("./app");
const PORT = process.env.PORT || 1337;

syncAndSeed()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`listening on http://localhost:${PORT}`)
    );
  })
  .catch(error => console.log(error));
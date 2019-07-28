const db = require('./db')

const app = require('./app');

const PORT = process.env.PORT || 1337;


db.sync()
.then( () => {
    console.log('db seeded')
})
.catch( error => console.log(error))
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));

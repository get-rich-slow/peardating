
const path = require('path');
const express = require('express');

const app = express();

var http = require('http').createServer(app);
var io = require('socket.io')(http);

//Static middleware
app.use(express.static(path.join(__dirname)));
app.use('/scripts',express.static(path.join(__dirname,'node_modules')));

//Parsing middleware
app.use('/', express.json());
app.use(express.urlencoded({extended: true}));


//API middleware
//app.use('/api', require('./routes/api'));


//Routes
app.get('/', (req, res, next) => res.sendFile('index.html'));
// app.get('/app.js', (req, res, next) =>
//   res.sendFile(path.join(__dirname, '..', 'dist', 'main.js'))
// );

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
      io.emit('chat message', msg);
    });
  });
  

module.exports = app;

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
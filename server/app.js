const path = require('path');
const express = require('express');

const app = express();

//Static middleware
app.use(express.static(path.join(__dirname, 'public')));

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


module.exports = app;
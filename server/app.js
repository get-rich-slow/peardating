const path = require("path");
const express = require("express");

//get API routers
const { messageRouter } = require("./api/Message-api");
const { userRouter } = require( "./api/User-api");

const app = express();

//Static middleware
app.use(express.static(path.join(__dirname, "public")));

//Parsing middleware
app.use("/", express.json());
app.use(express.urlencoded({ extended: true }));

//API ROUTES!!!
app.use("/api/messages", messageRouter);
app.use("/api/users", userRouter);

//Routes
app.get("/", (req, res, next) => res.sendFile("index.html"));
// app.get('/app.js', (req, res, next) =>
//   res.sendFile(path.join(__dirname, '..', 'dist', 'main.js'))
// );

module.exports = app;

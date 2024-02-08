require("dotenv").config("../.env");
const express = require("express");
const { notFoundHandler, errorHandler } = require("./error");

const middleware = require("./middleware");

const app = express();
app.use(middleware);
app.use(require("./routes"));



app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;

const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/users");
const showRoutes = require("./routes/shows");

app.use('/users', userRoutes);
app.use('/shows', showRoutes);

module.exports = app;
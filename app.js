const express = require("express");
const { getRecipe, getLanding } = require("./controllers");
const app = express();
app.use(express.json());

app.use("/recipe", getRecipe);

module.exports = app;

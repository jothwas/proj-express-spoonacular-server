const express = require("express");
const { getRecipeById, getRandomRecipe } = require("./controllers");
const app = express();
app.use(express.json());

app.get("/recipe/random", getRandomRecipe);
app.get("/recipe/:recipe_id", getRecipeById);

module.exports = app;

const { fetchRecipeById, fetchRandomRecipe } = require("./models");

exports.getRandomRecipe = (req, res, next) => {
  return fetchRandomRecipe().then((recipe) => {
    res.status(200).send(recipe);
  });
};

exports.getRecipeById = (req, res, next) => {
  const { recipe_id } = req.params;
  return fetchRecipeById(recipe_id).then((recipe) => {
    res.status(200).send(recipe);
  });
};

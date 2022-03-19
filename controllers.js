const { fetchRecipe, fetchLanding } = require("./models");

exports.getLanding = (req, res, next) => {
  return fetchLanding().then((landing) => {
    res.status(200).send(landing);
  });
};

exports.getRecipe = (req, res, next) => {
  return fetchRecipe().then((recipe) => {
    res.status(200).send(recipe);
  });
};

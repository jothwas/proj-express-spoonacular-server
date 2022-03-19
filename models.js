const rp = require("request-promise");
const fs = require("fs/promises");

exports.fetchLanding = () => {
  return fs
    .readFile("./landing.json", "utf-8")
    .then((landing) => JSON.parse(landing));
};

exports.fetchRecipe = async () => {
  const response = await rp(
    `https://api.spoonacular.com/recipes/random/?apiKey=${process.env.apiKey}`
  );
  const { recipes } = JSON.parse(response);
  const [recipeInfo] = recipes;
  const {
    extendedIngredients,
    id,
    title,
    readyInMinutes,
    servings,
    image,
    summary,
    instructions,
  } = recipeInfo;
  const recipe = {
    id,
    title,
    image,
    readyInMinutes,
    servings,
    extendedIngredients,
    instructions,
    summary,
  };
  return { recipe };
};

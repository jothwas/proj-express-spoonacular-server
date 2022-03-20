const rp = require("request-promise");

require("dotenv").config();

exports.fetchRandomRecipe = async () => {
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
  recipe.extendedIngredients = recipe.extendedIngredients.map((ingredient) => {
    const { id, name, amount, unit } = ingredient;
    return { id, name, amount, unit };
  });
  return { recipe };
};

exports.fetchRecipeById = async (recipe_id) => {
  const response = await rp(
    `https://api.spoonacular.com/recipes/${recipe_id}/information?apiKey=${process.env.apiKey}`
  );
  const recipeInformation = JSON.parse(response);
  const {
    extendedIngredients,
    id,
    title,
    readyInMinutes,
    servings,
    image,
    summary,
    instructions,
  } = recipeInformation;
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
  recipe.extendedIngredients = recipe.extendedIngredients.map((ingredient) => {
    const { id, name, amount, unit } = ingredient;
    return { id, name, amount, unit };
  });
  return { recipe };
};

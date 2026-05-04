import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals[0]);
      });
  }, [recipeId]);

  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <div>
      <Link to="/">Back to recipes</Link>
      <h2>{recipe.strMeal}</h2>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />
      <p>{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipeDetail;
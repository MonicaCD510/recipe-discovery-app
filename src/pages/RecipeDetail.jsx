import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data.meals ? data.meals[0] : null);
      });
  }, [recipeId]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div>
      <h1>{recipe.strMeal}</h1>

      <img src={recipe.strMealThumb} alt={recipe.strMeal} width="300" />

      <h2>Category</h2>
      <p>{recipe.strCategory}</p>

      <h2>Area</h2>
      <p>{recipe.strArea}</p>

      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>

      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default RecipeDetail;
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} width="100%" />
      <p>{recipe.name}</p>
      <Link to={`/recipe/${recipe.id}`}>View Details</Link>
    </div>
  );
}

export default RecipeCard;
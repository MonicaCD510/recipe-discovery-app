import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

function RecipeCard({ recipe }) {
  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  const favorite = isFavorite(recipe.id);

  const handleFavoriteClick = () => {
    if (favorite) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe); // 👈 IMPORTANT CHANGE
    }
  };

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} width="100%" />
      <p>{recipe.name}</p>

      <button onClick={handleFavoriteClick}>
        {favorite ? "Remove Favorite" : "Add Favorite"}
      </button>

      <br />

      <Link to={`/recipe/${recipe.id}`}>View Details</Link>
    </div>
  );
}

export default RecipeCard;
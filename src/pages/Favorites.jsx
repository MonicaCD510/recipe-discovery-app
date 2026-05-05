import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>My Favorites</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="recipe-list">
          {favorites.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.name} width="100%" />
              <p>{recipe.name}</p>
              <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Favorites;
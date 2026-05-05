import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorites Page</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <img src={recipe.image} alt={recipe.name} width="200" />
            <p>{recipe.name}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}

      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Favorites;
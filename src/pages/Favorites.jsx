import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

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
            <p>{recipe.title}</p>
          </div>
        ))
      )}

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Favorites;
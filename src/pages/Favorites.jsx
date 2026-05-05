import { useContext } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import RecipeCard from "../components/RecipeCard";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h1>Favorites Page</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favorites.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))
      )}

      <br />
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Favorites;
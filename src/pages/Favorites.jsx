import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Link } from "react-router-dom";

function Favorites() {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div>
      <h2>My Favorites</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favorites.map((id) => (
          <p key={id}>Recipe ID: {id}</p>
        ))
      )}

      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default Favorites;
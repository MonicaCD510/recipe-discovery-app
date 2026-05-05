import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    setLoading(true);

    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        const meals = data.meals || [];

        const formatted = meals.map((meal) => ({
          id: meal.idMeal,
          name: meal.strMeal,
          image: meal.strMealThumb,
        }));

        setRecipes(formatted);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Something went wrong. Please try again.");
        setLoading(false);
      });
  }, []);

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Recipe Discovery App</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <section>
              <h2>Recipes</h2>

              {loading ? (
                <p>Loading recipes...</p>
              ) : error ? (
                <p>{error}</p>
              ) : filteredRecipes.length === 0 ? (
                <p>No recipes found</p>
              ) : (
                <div className="recipe-list">
                  {filteredRecipes.map((recipe) => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                  ))}
                </div>
              )}
            </section>
          }
        />

        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  );
}

export default App;
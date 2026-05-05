import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./pages/RecipeDetail";
import Favorites from "./pages/Favorites";

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
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
      });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <h1>Recipe Discovery App</h1>

            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        }
      />

      <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
}

export default App;
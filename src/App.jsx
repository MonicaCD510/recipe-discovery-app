import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Spaghetti" },
    { id: 2, name: "Chicken Curry" },
    { id: 3, name: "Tacos" },
  ]);

  const [search, setSearch] = useState("");

  return (
    <div className="app-container">
      <h1>Recipe Discovery App</h1>

      <input
        type="text"
        placeholder="Search recipes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <section>
        <h2>Recipes</h2>

        {recipes.map((recipe) => (
          <p key={recipe.id}>{recipe.name}</p>
        ))}
      </section>
    </div>
  );
}

export default App;
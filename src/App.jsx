import { useState } from "react";

function App() {
  const [recipes, setRecipes] = useState([
    { id: 1, name: "Spaghetti" },
    { id: 2, name: "Chicken Curry" },
    { id: 3, name: "Tacos" },
  ]);

  return (
    <div className="app-container">
      <h1>Recipe Discovery App</h1>

      <section>
        <h2>Recipes</h2>
      </section>
    </div>
  );
}

export default App;
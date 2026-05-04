<section>
  <h2>Recipes</h2>

  {loading ? (
    <p>Loading recipes...</p>
  ) : filteredRecipes.length === 0 ? (
    <p>No recipes found</p>
  ) : (
    <div className="recipe-list">
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id} className="recipe-card">
          <p>{recipe.name}</p>
        </div>
      ))}
    </div>
  )}
</section>
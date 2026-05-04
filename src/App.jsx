<section>
  <h2>Recipes</h2>

  {recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(search.toLowerCase())
  ).length === 0 ? (
    <p>No recipes found</p>
  ) : (
    recipes
      .filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
      )
      .map((recipe) => (
        <p key={recipe.id}>{recipe.name}</p>
      ))
  )}
</section>
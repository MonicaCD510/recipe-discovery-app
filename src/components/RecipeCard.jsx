function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <p>{recipe.name}</p>
    </div>
  );
}

export default RecipeCard;
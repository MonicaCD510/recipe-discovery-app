function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} width="100%" />
      <p>{recipe.name}</p>
    </div>
  );
}

export default RecipeCard;
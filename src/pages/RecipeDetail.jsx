import { useParams } from "react-router-dom";

function RecipeDetail() {
  const { recipeId } = useParams();

  return (
    <div>
      <h2>Recipe Detail</h2>
      <p>Recipe ID: {recipeId}</p>
    </div>
  );
}

export default RecipeDetail;


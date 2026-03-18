import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function RecipeDetails({ recipes }) {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((item) => String(item.id) === recipeId);

  if (!recipe) {
    return (
      <div className="recipe-details">
        <h2>Recipe not found</h2>
        <p>The recipe you selected does not exist.</p>
        <Link className="back-link" to="/">
          Back to recipes
        </Link>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <p className="details-label">Recipe Details</p>
      <h2>{recipe.name}</h2>
      <p className="details-description">{recipe.description}</p>

      <div className="details-summary">
        <div>
          <span>Category</span>
          <strong>{recipe.category}</strong>
        </div>
        <div>
          <span>Cook Time</span>
          <strong>{recipe.cookTime}</strong>
        </div>
        <div>
          <span>Difficulty</span>
          <strong>{recipe.difficulty}</strong>
        </div>
        <div>
          <span>Servings</span>
          <strong>{recipe.servings}</strong>
        </div>
      </div>

      <div className="details-section">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="details-section">
        <h3>Instructions</h3>
        <ol>
          {recipe.instructions.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>

      <button
        type="button"
        className="back-button"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}

export default RecipeDetails;

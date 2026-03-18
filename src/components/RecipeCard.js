import React from "react";
import { Link } from "react-router-dom";

function RecipeCard({ recipe }) {
  return (
    <Link className="recipe-card" to={`/recipes/${recipe.id}`}>
      <div className="card-topline">
        <span className="card-category">{recipe.category}</span>
        <span className="card-time">{recipe.cookTime}</span>
      </div>

      <h2>{recipe.name}</h2>
      <p className="card-description">{recipe.description}</p>

      <div className="card-meta">
        <span>{recipe.difficulty}</span>
        <span>{recipe.servings} servings</span>
        <span>{recipe.ingredients.length} ingredients</span>
      </div>
    </Link>
  );
}

export default RecipeCard;

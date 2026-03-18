import React from "react";
import RecipeCard from "./RecipeCard";

function RecipeList({ recipes }) {
  if (!recipes.length) {
    return (
      <div className="empty-state">
        <h2>No recipes found</h2>
        <p>Try another search term to find a matching recipe.</p>
      </div>
    );
  }

  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </div>
  );
}

export default RecipeList;

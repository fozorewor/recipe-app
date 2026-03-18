import React, { useMemo, useState } from "react";
import { Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import recipesData from "./data/recipes";

function App() {
  const [recipes] = useState(recipesData);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return recipes;
    }

    return recipes.filter((recipe) => {
      const haystack = [
        recipe.name,
        recipe.category,
        recipe.description,
        recipe.ingredients.join(" "),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [recipes, searchTerm]);

  return (
    <div className="app-shell">
      <header className="hero">
        <div>
          <p className="eyebrow">Recipe App</p>
          <h1>Discover simple meals you can cook tonight.</h1>
          <p className="hero-copy">
            Browse sample recipes, open a recipe card for full details, and use
            search to quickly find the dish you want.
          </p>
        </div>

        <div className="hero-panel">
          <label className="search-label" htmlFor="recipe-search">
            Search recipes
          </label>
          <input
            id="recipe-search"
            className="search-input"
            type="text"
            placeholder="Try pasta, chicken, breakfast..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <p className="results-copy">
            Showing {filteredRecipes.length} of {recipes.length} recipes
          </p>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <RecipeList recipes={filteredRecipes} />
            </main>
          }
        />
        <Route
          path="/recipes/:recipeId"
          element={<RecipeDetails recipes={recipes} />}
        />
      </Routes>
    </div>
  );
}

export default App;

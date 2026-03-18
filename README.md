# Recipe App

## Overview
This assignment demonstrates the development of a simple React recipe application using Visual Studio Code, GitHub, `npx`, and GitHub Copilot. The completed app includes recipe cards, sample recipe data, a recipe detail component, and search functionality for finding recipes quickly.

## Project Setup
The project was structured as a React application and prepared for development in Visual Studio Code. Git was initialized for GitHub version control, and the recommended setup command for this project is `npx create-react-app recipe-app`. GitHub Copilot was used to support code generation for the user interface, sample data, and React components.

## Rubric Alignment

### 1. Project Setup
The project was successfully prepared for development with React, Visual Studio Code, and GitHub. The setup uses `npx` as the starting workflow and supports GitHub Copilot-assisted development.

### 2. UI Generation
A basic user interface was created for displaying recipe data. The interface includes:
- A page header
- A search bar
- Recipe cards
- A recipe details panel

### 3. Sample Data Generation
Sample recipe data was generated and stored in [`src/data/recipes.js`](./src/data/recipes.js). The data includes multiple recipes with:
- Recipe name
- Category
- Description
- Cook time
- Difficulty
- Servings
- Ingredients
- Instructions

### 4. Recipe Display
React components were implemented to display recipes in the user interface:
- [`src/components/RecipeList.js`](./src/components/RecipeList.js) renders the collection of recipes
- [`src/components/RecipeCard.js`](./src/components/RecipeCard.js) displays each recipe in card format
- [`src/App.js`](./src/App.js) manages the main layout and passes data to components

### 5. Recipe Detail Component
The Recipe Detail Component was developed in [`src/components/RecipeDetails.js`](./src/components/RecipeDetails.js). It displays detailed information for the selected recipe, including ingredients, instructions, category, difficulty, servings, and cook time.

### 6. Search Functionality
Search functionality was implemented in [`src/App.js`](./src/App.js). Users can search by recipe name, category, description, or ingredient, making it easier to find specific recipes.

## How to Run
1. Install dependencies with `npm install`
2. Start the development server with `npm start`
3. Build the project with `npm run build`

## Result
The final recipe app meets the assignment requirements by demonstrating successful project setup, user interface generation, sample data creation, recipe display, recipe detail rendering, and search functionality. This project is ready for submission through the Learning Management System (LMS).

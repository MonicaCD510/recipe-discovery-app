# Recipe Discovery App

A React-based application that allows users to browse recipes, view details, and save their favorite recipes for easy access.

## Features

- Fetches recipe data from an external API
- Displays recipes in a card layout
- View detailed information for each recipe
- Add and remove recipes from favorites
- Favorites page to manage saved recipes
- Persistent storage using localStorage
- Navigation using React Router
- Global state management using React Context

## Technologies Used

- React
- JavaScript (ES6+)
- React Router
- Context API
- CSS

## How It Works

- Recipes are fetched from TheMealDB API
- Each recipe is displayed using a reusable RecipeCard component
- Users can add or remove favorites using a toggle button
- Favorites are stored in localStorage and managed globally with Context
- The Favorites page reuses the RecipeCard component for consistent UI

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/MonicaCD510/recipe-discovery-app.git
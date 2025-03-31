import { useState } from "react";
import { RecipeListPage } from "./pages/RecipeListPage";
import { RecipePage } from "./pages/RecipePage";

export const App = () => {
  // Your state code here
  const [selectedRecipe, setSelectedRecipe] = useState();

  return selectedRecipe ? (
    <RecipePage selectedRecipe={selectedRecipe} clickFn={setSelectedRecipe} />
  ) : (
    <RecipeListPage clickFn={setSelectedRecipe} />
  );
};

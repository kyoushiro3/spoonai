"use client";

import { useState } from "react";
import InputForm from "./InputForm";
import ShoppingList from "./ShoppingList";
import fetchIngredients from "../api/fetchIngredients";
import { Ingredient } from "./types";

interface Dish {
  name: string;
  servings: number;
}


const DishManager: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchAllIngredients = async (dishes: Dish[]) => {
    setError(null);

    try {
      const fetchedIngredients: Ingredient[] = [];

      const dishNames = dishes.map((dish) => dish.name);
      const ingredientsForDish = await fetchIngredients(dishNames);
      
      fetchedIngredients.push(...ingredientsForDish); 

      setIngredients(fetchedIngredients);
    } catch (error) {
      console.error('Failed to fetch ingredients', error);
      setError("Failed to fetch ingredients.");
    }
  };

  return (
    <div>
      <InputForm onSearch={fetchAllIngredients} />
      {error && <p className="error">{error}</p>}
      {ingredients.length > 0 && <ShoppingList ingredients={ingredients} />}
    </div>
  );
};

export default DishManager;

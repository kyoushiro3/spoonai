"use client";

import { useState } from "react";
import { fetchIngredients } from "../api/route";
import InputForm from "./InputForm";
import ShoppingList from "./ShoppingList";

interface Dish {
  name: string;
  servings: number;
}

const DishManager: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchAllIngredients = async (dishes: Dish[]) => {
    setError(null);

    try {
      const fetchedIngredients: string[] = [];

      const dishNames = dishes.map((dish) => dish.name);
        const ingredientsForDish = await fetchIngredients(dishNames);
        fetchedIngredients.push(...ingredientsForDish);

      setIngredients(fetchedIngredients);
    } catch (error) {
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

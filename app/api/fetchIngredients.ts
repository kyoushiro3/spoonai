import axios from 'axios';
import { Ingredient } from '../components/types';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function estimatePrice(ingredientName: string, quantity: number): number {
  const pricePerKg: { [key: string]: number } = {
    "Pork belly": 400,
    "Fish sauce": 20,
    "Tamarind": 200,
    "Tomato": 5,
    "Onion": 5,
    "Radish": 150,
    "Kangkong": 100,
    "Salt": 100,
    // sample prices will be improved 
  };

  const basePrice = pricePerKg[ingredientName as keyof typeof pricePerKg] || 50;
  return basePrice * quantity;
}


async function fetchIngredients(dishNames: string[]): Promise<Ingredient[]> {
  try {
    const allIngredients: Ingredient[] = [];


    for (const dishName of dishNames) {
      const response = await axios.get(`${API_URL}`, {
        params: {
          query: dishName,
          number: 1, 
          apiKey: API_KEY,
        },
      });

      if (response.data.results && response.data.results.length > 0) {
        const recipeId = response.data.results[0].id;

        const recipeDetails = await axios.get(
          `https://api.spoonacular.com/recipes/${recipeId}/information`,
          {
            params: { apiKey: API_KEY },
          }
        );

        const formattedIngredients: Ingredient[] = recipeDetails.data.extendedIngredients
          .filter(
            (ingredient: Ingredient) => ingredient.name.toLowerCase() !== 'water'
          )
          .map((ingredient: Ingredient) => {
            const quantity = ingredient.amount;
            const unit = ingredient.unit || 'pcs';
            const estimatedPrice = estimatePrice(ingredient.name, quantity); 

            return {
              aisle: ingredient.aisle,
              name: ingredient.name,
              amount: `${quantity} ${unit}`,
              price: estimatedPrice,
            };
          });

        allIngredients.push(...formattedIngredients);
      }
    }

    return allIngredients;
  } catch (error) {
    console.error('Failed to fetch ingredients', error); 
    throw new Error('Failed to fetch ingredients');
  }
}

export default fetchIngredients;
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

// Example function to estimate prices
function estimatePrice(ingredientName: string, quantity: number): number {
  // Basic price estimation logic, can be modified based on real data
  const pricePerKg = {
    "Pork belly": 400,
    "Fish sauce": 20,
    "Tamarind": 200,
    "Tomato": 5,
    "Onion": 5,
    "Radish": 150,
    "Kangkong": 100,
    "Salt": 100,
    // Add more items as needed
  };

  // Assuming the price per unit based on item name and quantity (in kg)
  const basePrice = pricePerKg[ingredientName] || 50; // Default price if not in the list
  return basePrice * quantity;
}

export async function fetchIngredients(dishName: string): Promise<any[]> {
  try {
    const response = await axios.get(`${API_URL}`, {
      params: {
        query: dishName,
        number: 1,
        apiKey: API_KEY,
      },
    });

    const recipeId = response.data.results[0].id;

    const recipeDetails = await axios.get(
      `https://api.spoonacular.com/recipes/${recipeId}/information`,
      {
        params: { apiKey: API_KEY },
      }
    );

    //filter
    const formattedIngredients = recipeDetails.data.extendedIngredients
      .filter(
        (ingredient: any) =>
          ingredient.name.toLowerCase() !== 'water' // Exclude water
      )
      .map((ingredient: any) => {
        const quantity = ingredient.amount;
        const unit = ingredient.unit;
        const estimatedPrice = estimatePrice(ingredient.name, quantity); 

        return {
          Aisle: ingredient.aisle, 
          Item: ingredient.name, 
          Quantity: `${quantity} ${unit}`, 
          "Est. Price (PHP)": estimatedPrice, 
        };
      });

    return formattedIngredients;
  } catch (error) {
    throw new Error('Failed to fetch ingredients');
  }
}

import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function estimatePrice(ingredientName: string, quantity: number): number {
  const pricePerKg = {
    "Pork belly": 400,
    "Fish sauce": 20,
    "Tamarind": 200,
    "Tomato": 5,
    "Onion": 5,
    "Radish": 150,
    "Kangkong": 100,
    "Salt": 100,
    //sample prices will be improved 
  };

  const basePrice = pricePerKg[ingredientName] || 50; //for default value
  return basePrice * quantity;
}


export async function fetchIngredients(dishNames: string[]) {
  try {
    const allIngredients = [];


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

        const formattedIngredients = recipeDetails.data.extendedIngredients
          .filter(
            (ingredient: any) => ingredient.name.toLowerCase() !== 'water'
          )
          .map((ingredient: any) => {
            const quantity = ingredient.amount;
            const unit = ingredient.unit || 'pcs';
            const estimatedPrice = estimatePrice(ingredient.name, quantity); 

            return {
              Aisle: ingredient.aisle,
              Item: ingredient.name,
              Quantity: `${quantity} ${unit}`,
              "Est. Price (PHP)": estimatedPrice,
            };
          });

        allIngredients.push(...formattedIngredients);
      }
    }

    return allIngredients;
  } catch (error) {
    throw new Error('Failed to fetch ingredients');
  }
}

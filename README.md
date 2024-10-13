
# SpoonAI

SpoonAI✨ is a web application that allows users to fetch ingredients and their estimated prices based on various dishes. Utilizing the Spoonacular API, it provides a seamless experience for meal planning and grocery list management.

## Features

- Fetch Ingredients: Search for ingredients by dish name and retrieve detailed ingredient lists.
- Price Estimation: Get estimated prices for each ingredient based on predefined values.
- Dynamic Grocery List: Generate a comprehensive grocery list based on selected dishes.
- User-Friendly Interface: Simple and intuitive interface for adding dishes and viewing ingredients.

## Technologies used

**Frontend:**
- React.js
- TypeScript
- Tailwind CSS
- Backend:
- Next.js
- Axios for API requests
**API:**
- Spoonacular API

## Getting started

1. Clone the repository:

```bash
  git clone https://github.com/kyoushiro3/spoonai.git
  cd spoonAI
```

2. Install dependencies:
```bash
  npm install
```

3. Set up environment variables: Create a .env.local file in the root of the project and add your Spoonacular API credentials:
```bash
  NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_API_KEY=your_api_key
```
4. Run the development server:
```bash
 npm run dev
```

5. Open your browser: Go to http://localhost:3000 to see your application in action.
    
## How it Works?

- Add Dishes: Use the input form to enter dish names you want to search for.
- View Ingredients: After adding dishes, the application will display a list of ingredients and their estimated prices.
- Dynamic Grocery List: You can modify your search and the grocery list will update automatically.


## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'Add your feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License - see the
[LICENSE](https://choosealicense.com/licenses/mit/) file for details


## Acknowledgements
[Spoonacular API](https://spoonacular.com/food-api) for providing a vast amount of food data.
The open-source community for their invaluable resources and tools.


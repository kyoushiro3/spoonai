"use client"

import InputForm from './components/InputForm';
import ShoppingList from './components/ShoppingList';
import { useState } from 'react';
import { fetchIngredients } from './services/route';

const App: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (dishName: string) => {
    setError(null);
    try {
      const fetchedIngredients = await fetchIngredients(dishName);
      setIngredients(fetchedIngredients);
    } catch (err) {
      setError('Failed to fetch ingredients.');
    }
  };

  return (
    <div className="app">
      <h1>HungryAI</h1>
      <InputForm onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {ingredients.length > 0 && <ShoppingList ingredients={ingredients} />}
    </div>
  );
};

export default App;

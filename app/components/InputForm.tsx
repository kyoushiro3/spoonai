import React, { useState } from 'react';

interface InputFormProps {
  onSearch: (dishName: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onSearch }) => {
  const [dishName, setDishName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(dishName);
    setDishName('');
  };

  return (
    <form onSubmit={handleSubmit} className="input-form">
      <input 
        type="text"
        value={dishName}
        onChange={(e) => setDishName(e.target.value)}
        placeholder="Enter dish name"
        required
      />
      <button type="submit">Get Ingredients</button>
    </form>
  );
};

export default InputForm;

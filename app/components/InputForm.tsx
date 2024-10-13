"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

interface InputFormProps {
  onSearch: (dishes: Dish[]) => void;
}

interface Dish {
  name: string;
  servings: number;
}

const InputForm: React.FC<InputFormProps> = ({ onSearch }) => {
  const [dishName, setDishName] = useState<string>("");
  const [servings, setServings] = useState<number>(1);
  const [dishes, setDishes] = useState<Dish[]>([]);

  const addDish = () => {
    if (dishName.trim()) {
      setDishes([...dishes, { name: dishName, servings }]);
      setDishName("");
      setServings(1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch(dishes);          // Add dish when "Enter" is pressed
    }
  };

  const removeDish = (index: number) => {
    setDishes(dishes.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (dishName.trim() !== "") {
      // Add the current dish to the dishes array if not empty
      const newDish: Dish = { name: dishName, servings };
      setDishes((prevDishes) => [...prevDishes, newDish]);

      // Call the onSearch function with the updated dishes array
      onSearch([...dishes, newDish]);

      // Clear the input fields after submitting
      setDishName("");
      setServings(1);
  };
}

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-[32px] py-4 rounded-lg border border-[#C6CAD0] shadow-sm mt-4">

      <div className="flex flex-col">
        <h1 className="font-bold text-xl">Dishes</h1>
        <Label className="text-[#5F656E] text-[14px] font-medium mb-4">add all the dishes you want.</Label>
      </div>

      <div className="grid grid-cols-8 gap-2 mb-2">
        <div className="flex flex-col w-full col-span-5 max-w-sm gap-1.5">
          <Label className="text-[14px] font-medium">
            Dish
          </Label>
          <Input
            type="text"
            value={dishName}
            onKeyDown={handleKeyDown}
            onChange={(e) => setDishName(e.target.value)}
            placeholder="Enter a dish..."
            required
          />
        </div>

        <div className="flex flex-col w-full col-span-2 max-w-sm gap-1.5">
          <Label className="text-[14px] font-medium">
            Servings
          </Label>
          <Input
            type="text"
            value={servings}
            onChange={(e) => setServings(Number(e.target.value))}
            placeholder=""
            required
          />
        </div>

        <div className="flex flex-col w-full col-span-1 max-w-sm gap-1.5">
          <Label
            htmlFor="dish"
            className="text-[14px] font-medium items-center"
          >
            Remove
          </Label>
          <button
            type="submit"
            className="bg-zinc-700 text-zinc-300 text-sm p-2 rounded-lg border shadow-sm mb-4 h-10 px-4 py-2"
          >
            -
          </button>
        </div>
      </div>
      <div className="flex flex-col w-44 col-span-1 max-w-sm gap-1.5">
        <button
          type="button"
          onClick={addDish}
          className="bg-zinc-700 text-white text-sm rounded-lg border shadow-sm h-10 px-2 py-2"
        >
          Add Dish
        </button>
      </div>
      <ul className="mt-4">
        {dishes.map((dish, index) => (
          <li key={index} className="grid grid-cols-8 gap-2 mb-2">

            <div className="flex flex-col w-full col-span-5 max-w-sm gap-1.5">
              <Label htmlFor="dish" className="text-[14px] font-medium">
                Dish
              </Label>
              <Input
                type="text"
                value={dish.name}
                onChange={(e) => setDishName(e.target.value)}
                placeholder=""
                required
              />
            </div>

            <div className="flex flex-col w-full col-span-2 max-w-sm gap-1.5">
              <Label htmlFor="dish" className="text-[14px] font-medium">
                Servings
              </Label>
              <Input
                type="text"
                value={dish.servings}
                onChange={(e) => setServings(Number(e.target.value))}
                placeholder=""
                required
              />
            </div>
            <div className="flex flex-col w-full col-span-1 max-w-sm gap-1.5">
          <Label
            htmlFor="dish"
            className="text-[14px] font-medium items-center"
          >
            Remove
          </Label>
          <button
          type="button"
          onClick={() => removeDish(index)}
            className="bg-zinc-700 text-zinc-300 text-sm p-2 rounded-lg border shadow-sm mb-4 h-10 px-4 py-2"
          >
            -
          </button>
          </div>
          </li>
        ))}
      </ul>
      </div>
      <button
        type="submit"
        className="w-full bg-zinc-700 text-white text-sm px-8 rounded-lg border shadow-sm mb-4 h-10 mt-4 py-2"
      >
        Generate✨
      </button>
    </form>
  );
};

export default InputForm;

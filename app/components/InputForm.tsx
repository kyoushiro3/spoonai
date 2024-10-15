"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Loading from "@/components/ui/loading";
import React, { useState } from "react";

interface InputFormProps {
  onSearch: (dishes: Dish[]) => void;
  loading: boolean;
}

interface Dish {
  name: string;
  servings: number;
}

const InputForm: React.FC<InputFormProps> = ({ onSearch, loading }) => {
  const [dishName, setDishName] = useState<string>("");
  const [servings, setServings] = useState<number>(1);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [error, setError] = useState<string>("");

  const addDish = () => {
    if (dishName.trim() && servings > 0) {
      setDishes([...dishes, { name: dishName, servings }]);
      setDishName("");
      setServings(1);
      setError("");
    }
    else{
      setError("Servings must be greater than 0.")
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && servings > 0) {
      onSearch(dishes);        
    }
  };

  const removeDish = (index: number) => {
    setDishes(dishes.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (dishName.trim() !== "" && servings > 0) {

      const newDish: Dish = { name: dishName, servings };
      setDishes((prevDishes) => [...prevDishes, newDish]);

      onSearch([...dishes, newDish]);

      setDishName("");
      setServings(1);
      setError("");
  } else{
    setError("Servings must be greater than 0.")
  }

}


  return (
    <form onSubmit={handleSubmit}>
      <div className="px-[32px] py-4 rounded-lg border border-[#C6CAD0] shadow-sm mt-4">

      <div className="flex flex-col">
        <h1 className="font-bold text-xl">Dishes</h1>
        <Label className="text-[#5F656E] text-sm md:text-base font-medium mb-4">add all the dishes you want.</Label>
      </div>

      <div className="grid grid-cols-8 gap-2 mb-2">
        <div className="flex flex-col w-full col-span-5 max-w-sm gap-1.5">
          <Label className="text-sm md:text-base font-medium">
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
          <Label className="text-sm md:text-base font-medium">
            Servings
          </Label>
          <Input
            type="text"
            value={servings}
            onChange={(e) => setServings(Number(e.target.value))}
            placeholder="# of servings"
            required
          />
        </div>

        <div className="flex flex-col w-full col-span-1 max-w-sm gap-1.5">
          <Label
            htmlFor="dish"
            className="text-sm md:text-base font-medium items-center"
          >
            Remove
          </Label>
          <button
            type="submit"
            className="bg-zinc-700 text-zinc-300 text-sm p-2 rounded-lg border shadow-sm mb-4 h-10 px-4 py-2"
            disabled={servings <= 0}
          >
            -
          </button>
        </div>
        {error && <p className="text-red-500 text-sm w-full">{error}</p>} {/* Show error message */}
      </div>
      <div className="flex flex-col w-44 col-span-1 sm:col-span-2 max-w-sm gap-1.5">
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
              <Label htmlFor="dish" className="text-base font-medium">
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
              <Label htmlFor="dish" className="text-base font-medium">
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
            className="text-base font-medium items-center"
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
        className="w-full bg-zinc-700 text-white text-sm md:text-base px-8 rounded-lg border shadow-sm mb-4 h-10 mt-4 py-2"
      >{loading ? <Loading/> : <>Generate✨</>}
        
      </button>
    </form>
  );
};

export default InputForm;

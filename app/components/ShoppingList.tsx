import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Ingredient } from "./types";


interface ShoppingListProps {
  ingredients: Ingredient[];
}

const ShoppingList: React.FC<ShoppingListProps> = ({ ingredients }) => {
  const total = ingredients
  .map((ingredient) => ingredient.price) 
  .reduce((acc, price) => acc + price, 0); 

  return (
    <div className="px-8 py-8 rounded-lg border border-[#C6CAD0] shadow-sm mt-4 mb-4">
      <h2 className="font-bold text-xl">Here is your grocery list!</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Aisle</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead className="text-right">Est. Price (PHP)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {ingredients.map((ingredient, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{ingredient.aisle}</TableCell>
              <TableCell>
                {ingredient.name.charAt(0).toUpperCase() +
                  ingredient.name.substring(1).toLowerCase()}
              </TableCell>
              <TableCell>{ingredient.amount}</TableCell>
              <TableCell className="text-right">
                {ingredient.price}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
       
       
      </Table>
      <div className="w-full flex items-center justify-center bg-zinc-700 text-white text-sm px-8 border shadow-sm mb-4 h-10 mt-4 py-2">
        <h3>Total Estimated Price: {total.toLocaleString("en-US", {style:"currency", currency:"PHP"})}</h3> 
        </div>
    </div>
  );
};

export default ShoppingList;

interface Ingredient {
  Aisle: string;
  Item: string;
  Quantity: string;
  "Est. Price (PHP)": number;
}

interface Dish {
  name: string;
  serving: number;
}

interface ShoppingListProps {
  ingredients: Ingredient[];
}

const ShoppingList: React.FC<ShoppingListProps> = ({ ingredients }) => {
  return (
    <div>
      <h2>Shopping List</h2>
      <table>
        <thead>
          <tr>
            <th>Aisle</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Est. Price (PHP)</th>
          </tr>
        </thead>
        <tbody>
          {ingredients.map((ingredient, index) => (
            <tr key={index}>
              <td>{ingredient.Aisle}</td>
              <td>{ingredient.Item.charAt(0).toUpperCase()+ingredient.Item.substring(1).toLowerCase()}</td>
              <td>{ingredient.Quantity}</td>
              <td>{ingredient["Est. Price (PHP)"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingList;

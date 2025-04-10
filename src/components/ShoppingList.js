import React from "react";
import Item from "./Item";

function ShoppingList({ items }) { // Receive items as a prop
  const [categoryFilter, setCategoryFilter] = React.useState("All");

  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const filteredItems = categoryFilter === "All"
    ? items
    : items.filter(item => item.category === categoryFilter);

  return (
    <div className="ShoppingList">
      <div className="filter">
        Filter by category:
        <select value={categoryFilter} onChange={handleCategoryChange}>
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="items" role="list">
        {filteredItems.map(item => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

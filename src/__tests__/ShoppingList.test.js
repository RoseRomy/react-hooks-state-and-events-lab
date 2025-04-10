import { render, screen, fireEvent } from '@testing-library/react';
import ShoppingList from '../components/ShoppingList';

// Define specific itemData for this test
const testItemData = [
  { id: 1, name: "Milk", category: "Dairy" },
  { id: 2, name: "Cheese", category: "Dairy" },
  { id: 3, name: "Apples", category: "Produce" },
  { id: 4, name: "Carrots", category: "Produce" },
  { id: 5, name: "Cake", category: "Dessert" },
];

describe('ShoppingList Component', () => {
  test("displays all items initially", () => {
    render(<ShoppingList items={testItemData} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(testItemData.length);
  });

  test("displays only items that match the selected category", () => {
    render(<ShoppingList items={testItemData} />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: "Dairy" } });
    const itemsList = screen.getByRole('list');
    const dairyItems = itemsList.querySelectorAll('li')
    expect(dairyItems).toHaveLength(2); // Expected number of dairy items
  });
});

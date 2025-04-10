import { render, screen, fireEvent, findByClassName } from '@testing-library/react';
import App from "../App";

describe('App Component', () => {
  test("displays in 'light' mode when initialized", () => {
    render(<App />);
    expect(screen.getByClassName('App light')).toBeInTheDocument();
  });

  test("changes to 'dark' mode when the button is clicked", async () => {
    render(<App />);
    const button = screen.getByText(/Mode/i); // Matches "Dark Mode" or "Light Mode"
    fireEvent.click(button);
    const darkAppElement = await findByClassName(screen.container, 'App dark');
    expect(darkAppElement).toBeInTheDocument();
  });

  test("changes back to 'light' mode when the button is clicked twice", async () => {
    render(<App />);
    const button = screen.getByText(/Mode/i);
    fireEvent.click(button);
    fireEvent.click(button);
    const lightAppElement = await findByClassName(screen.container, 'App light');
    expect(lightAppElement).toBeInTheDocument();
  });
});

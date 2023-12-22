import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.tsx";

/**
 * @vitest-environment happy-dom
 */

describe("App", () => {
  test("it renders", () => {
    render(<App />);

    expect(screen.getByAltText(/vite logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/react logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/vitest logo/i)).toBeInTheDocument();
  });

  test("counter works", async () => {
    render(<App />);

    const count = screen.getByTestId("count");
    expect(count).toHaveTextContent("0");

    const button = screen.getByRole("button");
    await userEvent.click(button);
    await userEvent.click(button);

    expect(count).toHaveTextContent("2");
  });
});

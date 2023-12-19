import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App.tsx";

/**
 * @vitest-environment happy-dom
 */

describe("App", () => {
  test("it renders", async () => {
    render(<App />);

    expect(screen.getByAltText(/vite logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/react logo/i)).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toHaveTextContent(/0/);

    await userEvent.click(button);
    await userEvent.click(button);
    expect(button).toHaveTextContent(/2/);
  });
});

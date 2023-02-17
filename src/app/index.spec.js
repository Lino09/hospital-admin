import { render, screen } from "@testing-library/react";
import Home from "./page.tsx";

describe("Home page", () => {
  it("should render correctly", () => {
    const baseElement = render(<Home></Home>);
    expect(baseElement).toBeDefined();
  });
  it("should render text", () => {
    const baseElement = render(<Home></Home>);
    expect(baseElement).toBeDefined();
    const homeText = screen.getByText("Hello Home Page");

    expect(homeText).toBeInTheDocument();
  });
});

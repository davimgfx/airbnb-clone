import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

const { getByRole } = screen;

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = getByRole("heading", {
      name: "Test",
    });

    expect(heading).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";

import { Header } from ".";

const { getByAltText, getByTestId } = screen;

describe("<Header/>", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render header", () => {
    const { container } = render(<Header />);

    const header = container.firstChild as HTMLElement;

    expect(header.tagName.toLowerCase()).toBe("header");
  });

  it("should render logo", () => {
    const logo = getByAltText("logo airbnb");

    expect(logo).toBeInTheDocument();
  });

  it("should render elements in search bar", () => {
    const elements = getByTestId("search-bar");

    expect(elements).toBeInTheDocument();
  });

  it("should render userMenu and Modal", () => {
    const elements = getByTestId("userMenu");

    expect(elements).toBeInTheDocument();
  });
});

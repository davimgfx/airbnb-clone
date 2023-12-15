import { render, screen, fireEvent } from "@testing-library/react";

import { Logo } from ".";

import { useMedia } from "./hooks/useMedia";
import "./mocks/testMock";

import { logoSmall, logo } from "@/assets";

const { getByAltText } = screen;

describe("<Logo />", () => {
  beforeEach(() => {
    render(<Logo />);
  });

  it("should render the Logo", () => {
    const logo = getByAltText("logo airbnb");

    expect(logo).toBeInTheDocument();
  });

  it("should navigate to the homepage when clicked", () => {
    fireEvent.click(getByAltText("logo airbnb"));

    expect(window.location.pathname).toBe("/");
  });

  it("should render the small logo on cellphone screens", () => {
    Object.defineProperty(useMedia, "matchMedia", {
      value: (query: any) =>
        jest.fn().mockReturnValue(query === "(max-width: 768px)"),
    });

    const logoAirbnb = getByAltText("logo airbnb");

    logoAirbnb.getAttribute("width") === "30";

    logoAirbnb.getAttribute("height") === "30";
    
    logoAirbnb.getAttribute("src") === logoSmall;

    Object.defineProperty(window, "innerWidth", {
      writable: true,
      value: undefined,
    });
  });

  it("should render the normal logo on PC screens", () => {
    const logoAirbnb = getByAltText("logo airbnb");

    logoAirbnb.getAttribute("width") === "100";

    logoAirbnb.getAttribute("height") === "100";

    logoAirbnb.getAttribute("src") === logo;
  });
});

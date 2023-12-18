import { render, screen, fireEvent, renderHook } from "@testing-library/react";

import { Logo } from ".";

import { useMedia } from "./hooks/useMedia";

const { getByAltText } = screen;

import { testMediaMatches } from "./mocks/testMock";


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

  it("should have responsive logo", () => {
    const logoDiv = getByAltText("logo airbnb").parentElement;

    expect(logoDiv).toHaveClass(
      "sm:block hidden cursor-pointer md:w-[6.4rem] w-[2rem]"
    );
  });

  it("should return matches false", () => {
    testMediaMatches(false)

    const { result } = renderHook(() => useMedia("(min-width: 400px)"));

    expect(result.current).toBe(false);
  });

  it("should return matches true", () => {
    testMediaMatches(true)

    const { result } = renderHook(() => useMedia("(min-width: 400px)"));

    expect(result.current).toBe(true);
  });
});

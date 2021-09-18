import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomeContainer } from "@/pages/Home";

test("ok sum", () => {
  expect(1 + 1).toBe(2);
});

test("ok render", () => {
  render(<HomeContainer />);
  expect(screen.getByText("dummy")).toBeInTheDocument();
});

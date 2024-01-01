import { render, screen } from "@testing-library/react";
import { SendForm } from "./index";

test("renders send form", () => {
  const mockFn = jest.fn();
  render(<SendForm isLoading={false} onSubmit={mockFn} />);
  const select = screen.getByRole("combobox");
  const option = screen.getByRole("option", { name: "GET" });
  const input = screen.getByPlaceholderText("https://example.com");
  const submitBtn = screen.getByRole("button");
  expect(select).toHaveValue("GET");
  //@ts-ignore
  expect(option.selected).toBe(true);
  expect(input).toBeInTheDocument();
  expect(submitBtn).toHaveTextContent("Submit");
  expect(submitBtn).toHaveAttribute("type", "submit");
  expect(submitBtn).toBeEnabled();
});

test("renders send form in loading state", () => {
  const mockFn = jest.fn();
  render(<SendForm isLoading={true} onSubmit={mockFn} />);
  const submitBtn = screen.getByRole("button");
  expect(submitBtn).toBeDisabled();
});

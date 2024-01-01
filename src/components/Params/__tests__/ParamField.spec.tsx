import { render, screen } from "@testing-library/react";
import { ParamField } from "../ParamField";

test("renders param field", () => {
  const mockFn = jest.fn();
  render(<ParamField onRemove={mockFn} />);
  const removeBtn = screen.getByRole("button");
  const keyInput = screen.getByPlaceholderText("Key");
  const valueInput = screen.getByPlaceholderText("Value");
  expect(removeBtn).toHaveTextContent("Remove");
  expect(keyInput).toBeInTheDocument();
  expect(valueInput).toBeInTheDocument();
});

test("remove btn is working", () => {
  const mockFn = jest.fn();
  render(<ParamField onRemove={mockFn} />);
  const removeBtn = screen.getByRole("button");
  removeBtn.click();
  expect(mockFn).toBeCalled();
});

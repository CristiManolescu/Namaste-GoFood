import { sum } from "../sum";

test("Sum of two numbers might be calculated", () => {
  const result = sum(3, 4);

  expect(result).toBe(7);
});

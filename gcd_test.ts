import { assertEquals } from "@std/assert";
import { gcdBruteForce } from "./gcd.ts";

Deno.test("gcdBruteForce of 1 and 1 is 1", () => {
  // Arrange
  const a = 1;
  const b = 1;

  // Act
  const result = gcdBruteForce(a, b);

  // Assert
  assertEquals(result, 1);
});

Deno.test("gcdBruteForce of 4 and 2 is 2", () => {
  // Arrange
  const a = 4;
  const b = 2;

  // Act
  const result = gcdBruteForce(a, b);

  // Assert
  assertEquals(result, 2);
});
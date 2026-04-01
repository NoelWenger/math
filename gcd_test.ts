import { assertEquals } from "@std/assert";
import { gcdBruteForce, gcdEuclid } from "./gcd.ts";

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

Deno.test("gcdEuclid of 1 and 1 is 1", () => {
  const a = 1;
  const b = 1;
  const result = gcdEuclid(a, b);
  assertEquals(result, 1);
});

Deno.test("gcdEuclid of 4 and 2 is 2", () => {
  const a = 4;
  const b = 2;
  const result = gcdEuclid(a, b);
  assertEquals(result, 2);
});
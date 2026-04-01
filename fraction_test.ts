import { assertAlmostEquals, assertEquals, assertThrows } from "@std/assert";
import { Fraction } from "./fraction.ts";

Deno.test("fraction of 1/1 is 1.0", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  const float = fraction.toFloat(0.1);

  // Assert
  assertEquals(float, 1.0);
});

Deno.test("fraction of 2/3 is roughly 0.67", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const float = fraction.toFloat(0.01);

  // Assert
  assertAlmostEquals(float, 0.67);
});

Deno.test("1/3 + 2/6 = 2/3 is roughly 0.67", () => {
  // Arrange
  const left = new Fraction(1, 3);
  const right = new Fraction(2, 6);

  // Act
  left.add(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.67);
});

Deno.test("2/3 - 2/6 = 1/3 is roughly 0.33", () => {
  // Arrange
  const left = new Fraction(2, 3);
  const right = new Fraction(2, 6);

  // Act
  left.subtract(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.33);
});

Deno.test("2/3 : 1/4 = 8/3 is roughly 2.66", () => {
  // Arrange
  const left = new Fraction(2, 3);
  const right = new Fraction(1, 4);

  // Act
  left.divide(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 2.67);
});

Deno.test("2/3 * 1/2 = 2/6 is roughly 0.33", () => {
  // Arrange
  const left = new Fraction(2, 3);
  const right = new Fraction(1, 2);

  // Act
  left.multiply(right);

  // Assert
  assertAlmostEquals(left.toFloat(0.01), 0.33);
});

Deno.test("toString() returns '2/3' for Fraction(2, 3)", () => {
  // Arrange
  const fraction = new Fraction(2, 3);

  // Act
  const result = fraction.toString();

  // Assert
  assertEquals(result, "2/3");
});

Deno.test("parse('2/3') works", () => {
  // Arrange
  const input = "2/3";

  // Act
  const result = Fraction.parse(input);

  // Assert
  assertEquals(result.toString(), "2/3");
});

Deno.test("creating fraction with denominator 0 throws error", () => {
  assertThrows(() => {
    new Fraction(3, 0);
  });
});

Deno.test("parse throws when denominator is 0", () => {
  assertThrows(() => {
    Fraction.parse("3/0");
  });
});

Deno.test("cancel keeps 1/1 as 1/1", () => {
  // Arrange
  const fraction = new Fraction(1, 1);

  // Act
  fraction.cancel();

  // Assert
  assertEquals(fraction.toString(), "1/1");
});

Deno.test("cancel turns 2/4 into 1/2", () => {
  // Arrange
  const fraction = new Fraction(2, 4);

  // Act
  fraction.cancel();
});
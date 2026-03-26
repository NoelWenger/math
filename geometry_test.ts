import { assertAlmostEquals } from "@std/assert";
import { Circle, Point2D } from "./geometry.ts";

Deno.test("circumference of a circle with radius 5 is roughtly 31.416", () => {
  // Given
  const circle = new Circle(new Point2D(3, 4), 5);

  // When
  const actual = circle.circumference();

  // Then
  assertAlmostEquals(actual, 31.416, 0.01);
});

Deno.test("area of a circle with radius 5 is roughly 78.54", () => {
  // Given
  const circle = new Circle(new Point2D(0, 0), 5);

  // When
  const actual = circle.area();

  // Then
  assertAlmostEquals(actual, 78.54, 0.01);
});

Deno.test("diameter of a circle with radius 5 is 10", () => {
  // Given
  const circle = new Circle(new Point2D(0, 0), 5);

  // When
  const actual = circle.diameter();

  // Then
 assertAlmostEquals(actual, 10);
});

Deno.test("distance between (0,0) and (3,4) is 5", () => {
  // Given
  const p1 = new Point2D(0, 0);
  const p2 = new Point2D(3, 4);

  // When
  const actual = p1.distanceTo(p2);

  // Then
  assertAlmostEquals(actual, 5);
});

import { Rectangle } from "./geometry.ts";

Deno.test("circumference of rectangle is correct", () => {
  // Given
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));

  // When
  const actual = rect.circumference();

  // Then
  assertAlmostEquals(actual, 14);
});

Deno.test("area of rectangle 4x3 is 12", () => {
  // Given
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));

  // When
  const actual = rect.area();

  // Then
  assertAlmostEquals(actual, 12);
});

Deno.test("diagonal of rectangle (0,0) to (4,3) is 5", () => {
  // Given
  const rect = new Rectangle(new Point2D(0, 0), new Point2D(4, 3));

  // When
  const actual = rect.diagonal();

  // Then
  assertAlmostEquals(actual, 5);
});
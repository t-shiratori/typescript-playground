export interface Shape {
  draw(): void;
}

/**
 * サークル
 */

export class Circle implements Shape {
  draw(): void {
    console.log('Drawing a circle');
  }
}

export class CircleA implements Shape {
  draw(): void {
    console.log('Drawing a circle-a');
  }
}

export class CircleB implements Shape {
  draw(): void {
    console.log('Drawing a circle-b');
  }
}

/**
 * スクエア
 */

export class Square implements Shape {
  draw(): void {
    console.log('Drawing a square');
  }
}

export class SquareA implements Shape {
  draw(): void {
    console.log('Drawing a square-a');
  }
}

export class SquareB implements Shape {
  draw(): void {
    console.log('Drawing a square-b');
  }
}

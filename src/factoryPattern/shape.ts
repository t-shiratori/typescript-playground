export interface Shape {
  draw(): void;
}

export class Circle implements Shape {
  draw(): void {
    console.log('Drawing a circle');
  }
}

export class Square implements Shape {
  draw(): void {
    console.log('Drawing a square');
  }
}

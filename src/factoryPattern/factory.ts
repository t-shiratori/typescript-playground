import { Circle, Shape, Square } from './shape';

export type TShapeType = 'circle' | 'square';

export class ShapeFactory {
  createShape(type: TShapeType): Shape | null {
    if (type === 'circle') {
      return new Circle();
    } else if (type === 'square') {
      return new Square();
    } else {
      return null;
    }
  }
}

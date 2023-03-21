import {
  Circle,
  CircleA,
  CircleB,
  Shape,
  Square,
  SquareA,
  SquareB,
} from './shape';

type TCirlcleType = 'circle-a' | 'circle-b' | undefined;
type TSquareType = 'square-a' | 'square-b' | undefined;

/** シェイプストアの抽象クラス */
abstract class ShapeStore {
  orderSape(type: TCirlcleType | TSquareType) {
    console.log('orderSape');
    return this.createShape(type);
  }

  abstract createShape(type: string | undefined): Shape;
}

/** サークル用のストア */
export class CircleShapeStore extends ShapeStore {
  createShape(type: TCirlcleType) {
    switch (type) {
      case 'circle-a':
        return new CircleA();
      case 'circle-b':
        return new CircleB();
    }
    return new Circle();
  }
}

/** スクエア用のストア */
export class SquareShapeStore extends ShapeStore {
  createShape(type: TSquareType) {
    switch (type) {
      case 'square-a':
        return new SquareA();
      case 'square-b':
        return new SquareB();
    }
    return new Square();
  }
}

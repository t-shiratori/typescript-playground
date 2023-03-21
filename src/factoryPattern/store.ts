import { ShapeFactory, TShapeType } from './factory';

export class ShapeStore {
  shapeFactory: ShapeFactory;

  constructor(shapeFactory: ShapeFactory) {
    this.shapeFactory = shapeFactory;
  }

  orderSape(type: TShapeType) {
    console.log('orderSape');
    return this.shapeFactory.createShape(type);
  }
}

import { ShapeFactory } from './factory';
import { ShapeStore } from './store';

export const run = () => {
  const factory = new ShapeFactory();
  const store = new ShapeStore(factory);

  const circle = store.orderSape('circle');
  circle?.draw();

  const square = store.orderSape('square');
  square?.draw();
};

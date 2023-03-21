import { CircleShapeStore, SquareShapeStore } from './store';

export const run = () => {
  /** サークル用のストア */
  const circleStore = new CircleShapeStore();
  const circleA = circleStore.orderSape('circle-a');
  circleA?.draw();
  const circleB = circleStore.orderSape('circle-b');
  circleB?.draw();

  /** スクエア用のストア */
  const squareStore = new SquareShapeStore();
  const squareA = squareStore.orderSape('square-a');
  squareA?.draw();
  const squareB = squareStore.orderSape('square-b');
  squareB?.draw();
};

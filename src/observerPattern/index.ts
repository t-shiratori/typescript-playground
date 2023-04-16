import { Observer } from './observer';
import { Subject } from './subject';

export const run = () => {
  const observer = new Observer();

  const sub1 = new Subject(observer, '1');
  const sub2 = new Subject(observer, '2');
  const sub3 = new Subject(observer, '3');

  sub1.notice('notice-event-a');
  sub2.notice('notice-event-b');
  sub3.notice('notice-event-b');

  observer.emit('sub-event-a');
  observer.emit('sub-event-b');
};

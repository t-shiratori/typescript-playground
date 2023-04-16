import { Observer } from './observer';
import { TNoticeEvent, TSubscribeEvent } from './type';

export class Subject {
  id: string;
  observer: Observer;

  constructor(observer: Observer, id: string) {
    this.id = id;
    this.observer = observer;
    observer.addSubject(this);
  }

  getNotice(event: TSubscribeEvent) {
    console.log('Subject get notice', { thisId: this.id, event });
  }

  notice(event: TNoticeEvent) {
    console.log('Subject notice: ', { thisId: this.id, event });
    this.observer.getNotice({ subject: this, event });
  }
}

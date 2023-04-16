import { Subject } from './subject';
import { TNoticeEvent, TSubscribeEvent } from './type';

export class Observer {
  subjects: Subject[] = [];

  addSubject(subject: Subject): void {
    this.subjects.push(subject);
  }

  removeSubject(targetSubject: Subject): void {
    this.subjects = this.subjects.filter(
      (subject) => subject.id !== targetSubject.id
    );
  }

  getNotice({ subject, event }: { subject: Subject; event: TNoticeEvent }) {
    console.log('Observer get notice:', { subjectID: subject.id, event });
  }

  emit(event: TSubscribeEvent) {
    console.log('Observer emit: ', event);
    this.subjects.map((subject) => subject.getNotice(event));
  }
}

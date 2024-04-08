import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentToggleService {
  private toggleSubject = new Subject<string>();

  toggle$ = this.toggleSubject.asObservable();

  toggleContent(componentName: string) {
    this.toggleSubject.next(componentName);
  }
}

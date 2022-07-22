import { Component } from '@angular/core';
import { count, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngularTestRepo';
  obsInterval = interval(2000);
  counter: number = 0;
  constructor() {}

  jeClique($event: string) {
    this.counter++;
    console.warn($event);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor() {}

  getTodoItem() {
    const ret = [
      {
        titre: 'Item 1',
        creationDate: new Date().toDateString(),
        date: new Date().toDateString(),
      },
      {
        titre: 'Item 2',
        creationDate: new Date().toDateString(),
        date: new Date().toDateString(),
      },
      {
        titre: 'Item 3',
        creationDate: new Date().toDateString(),
        date: new Date().toDateString(),
      },
    ];
    return ret;
  }
}

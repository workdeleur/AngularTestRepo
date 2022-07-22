import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todoItem';
import { HttpClient } from '@angular/common/http';
import { map, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private httpClient: HttpClient) {}

  getTodoItems() {
    // const ret = [
    //   {
    //     titre: 'Item 1',
    //     creationDate: new Date().toDateString(),
    //     date: new Date().toDateString(),
    //   },
    //   {
    //     titre: 'Item 2',
    //     creationDate: new Date().toDateString(),
    //     date: new Date().toDateString(),
    //   },
    //   {
    //     titre: 'Item 3',
    //     creationDate: new Date().toDateString(),
    //     date: new Date().toDateString(),
    //   },
    // ];
    return this.httpClient
      .get('https://angular.deleur.fr/todos')
      .pipe(map((x) => x as TodoItem[]));
  }
}

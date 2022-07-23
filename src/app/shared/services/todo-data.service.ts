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
    return this.httpClient
      .get('https://angular.deleur.fr/todos')
      .pipe(map((x) => x as TodoItem[]));
  }

  getTodoItem(id: number) {
    return this.httpClient
      .get(`https://angular.deleur.fr/todos/${id}`)
      .pipe(map((x) => x as TodoItem));
  }
}

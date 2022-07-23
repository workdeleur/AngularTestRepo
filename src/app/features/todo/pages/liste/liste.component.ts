import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';
import { TodoItem } from 'src/app/shared/models/todoItem';
import { TodoDataService } from 'src/app/shared/services/todo-data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
})
export class ListeComponent implements OnInit {
  toto: string = 'http://google.fr';
  constructor(private todoSrv: TodoDataService, private router: Router) {}

  ngOnInit(): void {}
  toDoList = this.todoSrv.getTodoItems();

  selectedItem(event: MatSelectionListChange) {
    const item = event.options[0].value as TodoItem;
    this.router.navigate(['todo', 'liste', item.id]);
  }
}

import { Component, OnInit } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { TodoDataService } from 'src/app/shared/services/todo-data.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss'],
})
export class ListeComponent implements OnInit {
  toto:string = "http://google.fr";
  constructor(private todoSrv: TodoDataService) {}

  ngOnInit(): void {}
  toDoList = this.todoSrv.getTodoItems();

  selectedItem(event : MatSelectionListChange){

  }
}

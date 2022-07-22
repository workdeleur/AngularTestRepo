import { Component, OnInit } from '@angular/core';
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
  toDoList: string[] = this.todoSrv.getTodoItem().map((x) => x.titre);
}

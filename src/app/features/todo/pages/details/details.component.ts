import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, Route } from '@angular/router';
import { mergeMap, take } from 'rxjs';
import { TodoItem } from 'src/app/shared/models/todoItem';
import { TodoDataService } from 'src/app/shared/services/todo-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  item: TodoItem | null = null;
  obs$ = this.route.paramMap.pipe(
    mergeMap((param) =>
      this.todoDataService.getTodoItem(parseInt(param.get('id') || '0'))
    )
  );
  constructor(
    private route: ActivatedRoute,
    private todoDataService: TodoDataService
  ) {}

  ngOnInit(): void {
  
  }
}

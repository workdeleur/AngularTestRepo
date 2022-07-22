import { Component, Input, OnInit } from '@angular/core';
import { TodoItem } from 'src/app/shared/models/todoItem';

@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss'],
})
export class ItemlistComponent implements OnInit {
  @Input() item: TodoItem | null = null;
  
  constructor() {}

  ngOnInit(): void {}
}

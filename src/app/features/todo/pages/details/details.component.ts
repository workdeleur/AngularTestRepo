import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TodoItem } from 'src/app/shared/models/todoItem';

@Component({
  standalone: true,
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  imports: [MatButtonModule],
})
export class DetailsComponent implements OnInit {
  @Input() btnText: string = '';
  @Output() clickOnButton = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  btnClick(text: string) {
    this.clickOnButton.emit(text);
  }
}

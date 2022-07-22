import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { AjoutComponent } from './ajout/ajout.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    TodoComponent,
    ListeComponent,
    DetailsComponent,
    AjoutComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatListModule
  ]
})
export class TodoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { MatListModule } from '@angular/material/list';
import { ListeComponent } from './pages/liste/liste.component';
import { DetailsComponent } from './pages/details/details.component';
import { AjoutComponent } from './pages/ajout/ajout.component';
import { ItemlistComponent } from './Components/itemlist/itemlist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    TodoComponent,
    ListeComponent,
    //DetailsComponent,
    AjoutComponent,
    ItemlistComponent,
  ],
  imports: [CommonModule, TodoRoutingModule, MatListModule],
})
export class TodoModule {}

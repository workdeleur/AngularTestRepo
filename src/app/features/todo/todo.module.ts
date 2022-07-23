import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { MatListModule } from '@angular/material/list';
import { ListeComponent } from './pages/liste/liste.component';
import { AjoutComponent } from './pages/ajout/ajout.component';
import { ItemlistComponent } from './components/itemlist/itemlist.component';
import { DetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [
    TodoComponent,
    ListeComponent,
    AjoutComponent,
    ItemlistComponent,
    DetailsComponent,
  ],
  imports: [CommonModule, TodoRoutingModule, MatListModule],
})
export class TodoModule {}

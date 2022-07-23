import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { ListeComponent } from './pages/liste/liste.component';
import { TodoComponent } from './todo.component';

// const routes: Routes = [{ path: '', component: TodoComponent }];
const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      { path: 'liste', component: ListeComponent },
      { path: 'liste/:id', component: DetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoRoutingModule {}

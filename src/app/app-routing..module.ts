import { NgModule} from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { AboutTodolistComponent } from './about-todolist/about-todolist.component';

const routes: Routes = [
    { path: '', component: TodosComponent },
    { path: 'about', component: AboutTodolistComponent },
  ];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddtodoComponent } from './addtodo/addtodo.component';
import { FormsModule } from '@angular/forms';
import { AboutTodolistComponent } from './about-todolist/about-todolist.component';
import { AppRoutingModule } from './app-routing..module';



@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodolistComponent,
    AddtodoComponent,
    AboutTodolistComponent,
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

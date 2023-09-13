import { Component } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[];
  localItem: string | null;
  constructor() {
    this.localItem = localStorage.getItem("todos");
    if (this.localItem == null) {
      this.todos = [];
    }
    else {
      this.todos = JSON.parse(this.localItem)
    }

  }
  ngOnInit(): void {

  }

  deletetodo(todo: Todo) {
    const index = this.todos.indexOf(todo); //find index of array
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log(todo);
  }

  addTo(todo: Todo) {
    console.log(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
    this.todos.push(todo);
  }
  ckeckbox(todo: Todo) {
    const index = this.todos.indexOf(todo); //find index of array
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));

  }

}

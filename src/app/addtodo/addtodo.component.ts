import { EventEmitter ,Output} from '@angular/core';
import { Component } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})


export class AddtodoComponent {
  title!: string;
  desc!:string;
  @Output() addTodo: EventEmitter<Todo> =new EventEmitter();
  constructor(){
  }

  onSubmit(){
  const todo={
    sno:7,
    title:this.title,
    desc:this.desc,
    active:true

  }
this.addTodo.emit(todo);

  }
}

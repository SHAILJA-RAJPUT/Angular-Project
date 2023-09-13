import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import{Todo} from '../Todo'
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})


export class TodolistComponent implements OnInit {
 
  @Input() i!:number ;
  @Input() todo!: Todo;
  @Output() tododelete: EventEmitter<Todo> =new EventEmitter();
  @Output() todocheckbox: EventEmitter<Todo> =new EventEmitter();
  constructor(){
  }
  ngOnInit(){
  }
Onclick(todo:Todo){
  this.tododelete.emit(todo);
console.log("click event trigger")
}

onCheckBoxClick(todo: any){
  this.todocheckbox.emit(todo);
}

}

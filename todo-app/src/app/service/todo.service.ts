import { Injectable } from '@angular/core';
import { of } from "rxjs";
import {Todo} from "../model/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos!: Todo[];
  constructor() { 
    this.todos = [
      {
        id: '111',
        title: 'Learn Java',
        isCompleted: true,
        date: new Date() 
      },
      {
        id: '222',
        title: 'Learn DSA',
        isCompleted: true,
        date: new Date() 
      },
      {
        id: '333',
        title: 'Learn React',
        isCompleted: false,
        date: new Date() 
      }
    ];
  }

  //read
  getTodo(){
    return of(this.todos);  //Array todos is now Observable
  }
  //create
  addTodo(todo: Todo){
    this.todos.push(todo);
  }
  //update
  changeStatus(todo: Todo){
    this.todos.map( singleTodo => 
      {
        if(singleTodo.id == todo.id){
          todo.isCompleted = !todo.isCompleted;
        }
      });
  }
  //delete
  deleteTodo(todo: Todo){
    const indexOfTodo = this.todos.findIndex(
      (currObj) => currObj.id == todo.id
    );
    this.todos.splice(indexOfTodo , 1);
  }
  
}

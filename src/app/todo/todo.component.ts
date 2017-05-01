import { Component, OnInit } from '@angular/core';
import { TodosService} from '../todos.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
todo;
text;
appState = 'default';
oldText;
  constructor(private _todosService: TodosService) { }

  ngOnInit() {

  this.todo = this._todosService.getTodos();
}

  addToDo(){
    var newTODO = {
      text: this.text
    }
    this.todo.push({
      text: this.text
    });

    this._todosService.addTodo(newTODO);
  }

 
 
  deleteToDo(todoText){
    
    for(var i = 0; i < this.todo.length; i++){
      if(this.todo[i].text == todoText){
        this.todo.splice(i,1);
      }
    }
    this._todosService.deleteTodo(todoText);
  }
 
 
 
  editToDo(todo){
    this.appState = 'edit';
    this.oldText = todo.text;
    this.text = todo.text;
    console.log(this.oldText);
  //  console.log(this.text);

 }

 
 
  updateTodo(){
   // console.log(this.text);
  for(var i = 0; i < this.todo.length; i++){
      if(this.todo[i].text == this.oldText){
        this.todo[i].text = this.text;
      }
   }

   this._todosService.updateTodo(this.oldText,this.text);
 
 }
 
}

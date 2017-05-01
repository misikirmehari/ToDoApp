import { Component } from '@angular/core';
import { TodoComponent } from './todo/todo.component'
import { TodosService } from './todos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TodosService]

})

export class AppComponent {
  title = 'app works!';
}

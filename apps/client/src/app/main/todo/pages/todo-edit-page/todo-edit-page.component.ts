import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo, UpdateTodoDto } from '@centurion/shared';
import { TodoEndpoint } from 'apps/client/src/app/api/todo.endpoint';




@Component({
  templateUrl: './todo-edit-page.component.html',
  styleUrls: ['./todo-edit-page.component.scss'],
})
export class TodoEditPageComponent {

  todo?: Todo;
  todoForm: FormGroup;
  updateMode = false;



  constructor(private todoEndpoint: TodoEndpoint, private router: Router,
  ) {

    this.todoForm = new FormGroup({
      title: new FormControl(""),
      done: new FormControl(""),
    });

  }
  get todoFormControls() {
    return this.todoForm.controls
  }



  editdotoForm() {
    this.todoFormControls['title'].patchValue(this.todo?.title);
    this.todoFormControls['done'].patchValue(this.todo?.done);
  }

  updateTodo() {
    const todoData: UpdateTodoDto = {
      title: this.todoFormControls['title'].value,

    };

    const id = this.todo?.id ?? '';
    this.todoEndpoint.update(id, todoData).subscribe({
      next: (response) => {

        this.updateMode = true;

        console.log('Record updated successfully', response);



      },

      error: (err) => {
        console.log(err);
      }
    });
  }

  deleteTodo() {

    const id = this.todo?.id ?? '';
    this.todoEndpoint.delete(id).subscribe({
      next: (response) => {

        console.log('To do record deleted successfully');
        console.log(response);

        return this.router.navigate(['todo/list/page']);
      }
    });
  }

  goBack() {
    return this.router.navigate(['todo/list/page']);
  }


}

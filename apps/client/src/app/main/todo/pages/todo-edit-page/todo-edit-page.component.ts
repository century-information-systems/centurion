import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo, UpdateTodoDto } from '@centurion/shared';
import { TodoEndpoint } from 'apps/client/src/app/api/todo.endpoint';




@Component({
  templateUrl: './todo-edit-page.component.html',
  styleUrls: ['./todo-edit-page.component.scss'],
})
export class TodoEditPageComponent {

  todo!: Todo;
  todoForm: FormGroup;
  updateMode = false;



  constructor(private todoEndpoint: TodoEndpoint, private router: Router,
    private route: ActivatedRoute
  ) {
    this.todo = this.route.snapshot.data['todo'];
    console.log(this.todo)

    this.todoForm = new FormGroup({
      title: new FormControl(this.todo.title),
      done: new FormControl(this.todo.done),
    });



  }
  get todoFormControls() {
    return this.todoForm.controls
  }



  editdotoForm() {
    this.updateMode = true;
    this.todoFormControls['title'].patchValue(this.todo?.title);
    // this.todoFormControls['done'].patchValue(this.todo?.done);
  }

  updateTodo() {
    const todoData: UpdateTodoDto = {
      title: this.todoFormControls['title'].value,

    };

    const id = this.todo?.id ?? '';
    this.todoEndpoint.update(id, todoData).subscribe({
      next: (response) => {

        this.updateMode = false;
        this.todo.title = response.title;

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

        return this.router.navigate(['todos/list']);
      }
    });
  }

  goBack() {
    return this.router.navigate(['todos/list']);
  }


}

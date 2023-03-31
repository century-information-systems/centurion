/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TodoEndpoint } from 'apps/client/src/app/api/todo.endpoint';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './todo-new-page.component.html',
  styleUrls: ['./todo-new-page.component.scss'],
})
export class TodoNewPageComponent implements OnInit, OnDestroy {
  newTodo: any = FormGroup;

  _subscriptions: Subscription[] = [];
  constructor(
    private fb: FormBuilder,
    private todoEndpoint: TodoEndpoint,
    private router: Router
  ) {}

  ngOnInit(): void {
    // new todo form validation
    this.newTodo = this.fb.group({
      title: ['', Validators.required],
    });
    throw new Error('Method not implemented.');
  }

  addTodo() {
    if (this.newTodo.valid) {
      const newTodoData = {
        title: this.newTodo.value.title,
      };
      this.todoEndpoint.create(newTodoData).subscribe({
        next: () => {
          this.newTodo.reset();
          // this.router.navigate(['/todos/list']);
        },
        error: (error) => {
          console.log(`An error occured when attempting to add a new todo...`);
          console.log(error);
        },
      });
    }
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach((sub) => {
      sub.unsubscribe();
    });
  }
}

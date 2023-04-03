import { Component, OnDestroy, OnInit } from '@angular/core';
import { Todo } from '@centurion/shared';
import { TodoEndpoint } from 'apps/client/src/app/api/todo.endpoint';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './todo-list-page.component.html',
  styleUrls: ['./todo-list-page.component.scss'],
})
export class TodoListPageComponent implements OnInit, OnDestroy {

  todos: Todo[] = [];

  _subscriptions: Subscription[] = [];

  constructor(
    private readonly todoEndpoint: TodoEndpoint,
  ) { }

  ngOnInit(): void {
    const todoEndpointListSubscription = this.todoEndpoint.list()
      .subscribe({
        next: (todos) => {
          this.todos = todos;
          console.log('todos', todos);
        },
        error: (error) => {
          console.log(`An error occured when attempting to fetch a list of todos...`);
          console.log(error);
        },
      });

    this._subscriptions.push(todoEndpointListSubscription);
    console.log('_subscription', todoEndpointListSubscription);
  }

  ngOnDestroy(): void {
    this._subscriptions.forEach(sub => {
      sub.unsubscribe();
    });
  }
}

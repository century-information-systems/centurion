import { Injectable } from '@angular/core';
import {
    Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Todo } from '@centurion/shared';
import { catchError, map, Observable } from 'rxjs';
import { TodoEndpoint } from '../../../api/todo.endpoint';

@Injectable({
    providedIn: 'root'
})
export class TodoEditResolver implements Resolve<Todo> {
    constructor(private readonly todoEndpoint: TodoEndpoint,) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Todo> {

        const id = route.params['id'];

        return this.todoEndpoint.findById(id).pipe(
            map((response) => {
                console.log('data', response)
                return response;
            }),
            catchError((error, caught) => {
                return caught;
            })
        );
    }
}
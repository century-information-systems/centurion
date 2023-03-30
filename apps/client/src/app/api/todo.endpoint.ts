import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateTodoDto, Todo, TodoEndpointContract, UpdateTodoDto } from "@centurion/shared";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class TodoEndpoint implements TodoEndpointContract {
    baseUrl = '/api/todos';

    constructor(private readonly httpClient: HttpClient) { }

    list(): Observable<Todo[]> {
        return this.httpClient.get<Todo[]>(`${this.baseUrl}/list`);
    }

    findById(id: string): Observable<Todo> {
        return this.httpClient.get<Todo>(`${this.baseUrl}/find/id/${id}`);
    }

    create(data: CreateTodoDto): Observable<Todo> {
        return this.httpClient.post<Todo>(`${this.baseUrl}/create`, data);
    }

    update(id: string, data: UpdateTodoDto): Observable<Todo> {
        return this.httpClient.patch<Todo>(`${this.baseUrl}/update/${id}`, data);
    }

    delete(id: string): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/delete/${id}`);
    }
}
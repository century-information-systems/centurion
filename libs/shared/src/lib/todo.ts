import { IsNotEmpty } from 'class-validator';
import { Observable } from 'rxjs';

export interface Todo {
    id: string;
    title: string;
    done: boolean;
}

export class CreateTodoDto {
    @IsNotEmpty()
    title!: string;
}

export class UpdateTodoDto {
    @IsNotEmpty()
    title!: string;
}

export interface TodoEndpointContract {
    list(): Promise<Todo[]> | Observable<Todo[]>;
    findById(id: string): Promise<Todo> | Observable<Todo>;
    create(data: CreateTodoDto): Promise<Todo> | Observable<Todo>;
    update(id: string, data: UpdateTodoDto): Promise<Todo> | Observable<Todo>;
    delete(id: string): Promise<void> | Observable<void>;
}
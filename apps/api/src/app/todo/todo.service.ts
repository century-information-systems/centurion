import { CreateTodoDto, Todo } from "@centurion/shared";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class TodoService {
    todos: Todo[] = [];

    constructor() {
        this._seeder();
    }

    list(): Promise<Todo[]> {
        return Promise.resolve(this.todos);
    }

    findById(id: string): Promise<Todo> {
        const todo = this.todos.find(todo => todo.id === id);
        if (!todo) {
            throw new NotFoundException(`A todo with the specified ID: ${id} was not found!`);
        }

        return Promise.resolve(todo);
    }

    create(data: CreateTodoDto): Promise<Todo> {
      console.log(data)
        const todo: Todo = {
            id: Date.now().toString(),
            title: data.title,
            done: false,
        };

        this.todos.push(todo);

        return Promise.resolve(todo);
    }

    update(id: string, data: CreateTodoDto): Promise<Todo> {
        const existingTodo = this.todos.find(todo => todo.id === id);
        if (!existingTodo) {
            throw new NotFoundException(`A todo with the specified ID: ${id} was not found!`);
        }

        const updatedTodo: Todo = {
            ...existingTodo,
            title: data.title,
        };

        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return updatedTodo;
            }

            return todo;
        });

        return Promise.resolve(updatedTodo);
    }

    delete(id: string): Promise<void> {
        const existingTodo = this.todos.find(todo => todo.id === id);
        if (!existingTodo) {
            throw new NotFoundException(`A todo with the specified ID: ${id} was not found!`);
        }

        this.todos = this.todos.filter(todo => todo.id !== id);

        return Promise.resolve();
    }

    _seeder() {
        this.todos.push(
            { id: Date.now().toString() + 1, title: 'First Todo', done: true },
            { id: Date.now().toString() + 2, title: 'Second Todo', done: false },
            { id: Date.now().toString() + 3, title: 'Third Todo', done: false },
        );
    }
}

import { CreateTodoDto, Todo, TodoEndpointContract, UpdateTodoDto } from "@centurion/shared";
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";

@Controller('/todos')
export class TodoController implements TodoEndpointContract {

    constructor(private readonly todoService: TodoService) { }

    @Get('/list')
    list(): Promise<Todo[]> {
        return this.todoService.list();
    }

    @Get('/find/id/:id')
    findById(@Param('id') id: string): Promise<Todo> {
        return this.todoService.findById(id);
    }

    @Post('/create')
    create(@Body() data: CreateTodoDto): Promise<Todo> {
        return this.todoService.create(data);
    }

    @Patch('/update/:id')
    update(@Param('id') id: string, @Body() data: UpdateTodoDto): Promise<Todo> {
        return this.todoService.update(id, data);
    }

    @Delete('/delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.todoService.delete(id);
    }
}
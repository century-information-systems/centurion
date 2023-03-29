import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TodoDetailPageComponent } from "./pages/todo-detail-page/todo-detail-page.component";
import { TodoEditPageComponent } from "./pages/todo-edit-page/todo-edit-page.component";
import { TodoListPageComponent } from "./pages/todo-list-page/todo-list-page.component";
import { TodoNewPageComponent } from "./pages/todo-new-page/todo-new-page.component";
import { todoRoutes } from "./todo.routes";

import { ButtonModule } from 'primeng/button';

@NgModule({
    declarations: [
        TodoListPageComponent,
        TodoDetailPageComponent,
        TodoNewPageComponent,
        TodoEditPageComponent,
    ],
    imports: [
        RouterModule.forChild(todoRoutes),
        ButtonModule,
    ],
})
export class TodoModule { }
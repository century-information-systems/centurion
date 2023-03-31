import { Routes } from "@angular/router";
import { TodoDetailPageComponent } from "./pages/todo-detail-page/todo-detail-page.component";
import { TodoEditPageComponent } from "./pages/todo-edit-page/todo-edit-page.component";
import { TodoListPageComponent } from "./pages/todo-list-page/todo-list-page.component";
import { TodoNewPageComponent } from "./pages/todo-new-page/todo-new-page.component";
import { TodoEditResolver } from "./resolvers/todo-edit.resolver";

export const todoRoutes: Routes = [
    { path: 'list', component: TodoListPageComponent },
    { path: 'detail/:id', component: TodoDetailPageComponent },
    { path: 'new', component: TodoNewPageComponent },
    { path: 'edit/:id', component: TodoEditPageComponent, resolve: { todo: TodoEditResolver } },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
];
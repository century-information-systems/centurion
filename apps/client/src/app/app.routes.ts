import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'todos',
        loadChildren: () => import('./main/todo/todo.module').then(m => m.TodoModule),
    },
];

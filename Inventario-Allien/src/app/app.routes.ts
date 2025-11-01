import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'bodega',
        loadChildren: () => import("./bodega/bodega.routes").then(m => m.bodegaRoutes)
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];

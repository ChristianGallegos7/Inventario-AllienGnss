import { Routes } from "@angular/router";
import { BodegaLayoutComponent } from "./bodega-layout/bodega-layout.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

export const bodegaRoutes: Routes = [
    {
        path: '',
        component: BodegaLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            }
        ]
    }
]
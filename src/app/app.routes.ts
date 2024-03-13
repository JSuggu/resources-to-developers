import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';

export const routes: Routes = [
    {path: "api", component: ContentComponent},
    {path: "design", component: ContentComponent},
    {path: "menu-option", component: ContentComponent},
    {path: "programming-logic", component: ContentComponent},
    {path: "tutorials-and-guides", component: ContentComponent},
    {path: "others", component: ContentComponent},
    {path: "", redirectTo: "/api", pathMatch: 'full'},
    {path: "**", redirectTo: "/api"},
];

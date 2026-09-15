import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { Login } from './components/login/login';
import { UserCreate } from './components/user-create/user-create';

export const routes: Routes = [
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:Login},
{path:'dashboard',component:Dashboard},
{ path: 'users/create', component: UserCreate },
];

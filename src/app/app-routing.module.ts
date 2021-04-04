import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComponent } from './components/task/task.component';
import { HomeComponent } from './components/home/home.component';

import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/user/add-user/add-user.component';

import { RoleComponent } from './components/role/role.component';
import { PermissionComponent } from './components/permission/permission.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'task', component: TaskComponent },
  { path: 'users', component: UserComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'roles', component: RoleComponent },
  { path: 'permissions', component: PermissionComponent },
  { path: 'hello',   loadChildren : './lazy/lazy.module#LazyModule'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

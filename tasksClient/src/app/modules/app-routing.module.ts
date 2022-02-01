import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from '../components/add-task/add-task.component';
import { TasksComponent } from '../components/tasks/tasks.component';

const routes: Routes = [
    { path: "home", component: TasksComponent },
    { path: "add", component:  AddTaskComponent},
    {path: "", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

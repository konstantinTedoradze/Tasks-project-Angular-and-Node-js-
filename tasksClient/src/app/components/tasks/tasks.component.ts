import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private tasksService: TasksService, private router: Router) { }

  public lists: any = [];

  ngOnInit(): void {
    this.getTasks();
  }
  
  getTasks(): void {
    
    const observable = this.tasksService.getAllTasks();
  
    observable.subscribe(lists => {
      console.log(lists);
      this.lists = lists;
    },serverErrorResponse => {
      alert("error!" + serverErrorResponse.message);
    });
  }

  onDelete(id: number): void {
      const observable = this.tasksService.deleteTask(id);
    
      observable.subscribe(deleted => {
        if(deleted){
          this.getTasks();
        }
      },serverErrorResponse => {
        alert("error!" + serverErrorResponse.message);
      });
  }

}

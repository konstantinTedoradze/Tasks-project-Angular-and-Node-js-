import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FamilyMembersService } from 'src/app/services/family-members.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  public description = "";
  public optionValue: any;
  public members: any = [];

   constructor(public tasksService: TasksService,public membersService: FamilyMembersService,public router: Router) { }
  
 
   ngOnInit(): void {
     const observable = this.membersService.getFamilyMembers();
   
    observable.subscribe(members => {
      console.log(members);
      this.members = members;
    },serverErrorResponse => {
      alert("error!" + serverErrorResponse.message);
    });
   }
   
   onOptionSelected(event: any): void {
     console.log(event.target.value);
     this.optionValue = event.target.value;
   } 

   onAddTask(): void {
     
      const details = {
        familyId: this.optionValue,
        description: this.description
      }

      const observable = this.tasksService.addTask(details);
      observable.subscribe(addTodo => {
        console.log(addTodo);
        this.router.navigate(["/home"]);
      },serverErrorResponse => {
        alert("error!" + serverErrorResponse.message);
      });

   }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksDetails } from '../models/tasksDetails';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) { }

  public getAllTasks(): Observable<any> {
    return this.http.get<any>("http://localhost:3001/tasks")
  }

  public addTask(tasksDetails: TasksDetails): Observable<any> {
    return this.http.post<any>("http://localhost:3001/tasks/addTask",tasksDetails);
  }

  public deleteTask(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3001/tasks/delete/${id}`);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('http://mywebsite.dev/api/get_task') 
  }

  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>('http://mywebsite.dev/api/add_task',task) 
  }

  deleteTask(id: number): Observable<{}>{
    const url = 'http://mywebsite.dev/api/task/'+id;
    return this.http.delete(url);
  }

  updateTask(task: Task): Observable<{}>{
    const url = 'http://mywebsite.dev/api/edit_task/'+ task.id;
    return this.http.put<Task>(url,task)
  }

  
}

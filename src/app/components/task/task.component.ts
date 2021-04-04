import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskService } from './task.service';
import { Task } from './task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [TaskService]
})
export class TaskComponent implements OnInit {
  
  task: Task[];
  editTask: Task;

  constructor(private taskService: TaskService, private http: HttpClient) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void{
    this.taskService.getTasks().subscribe(tasks =>(this.task=tasks))
  }

  add(title: string): void{
    this.editTask == undefined;
    title = title.trim();
    if(!title){
      return;
    }
    const newtask: Task = {title} as Task;
    this.taskService.addTask(newtask).subscribe(() => this.getTasks())
  }

  delete(task: Task): void{
    this.task = this.task.filter(h=> h! == task);
    this.taskService
        .deleteTask(task.id)
        .subscribe(()=>this.getTasks())
  }

  edit(task: Task){ 
     this.editTask = task;
  }

  update(){
    if(this.editTask){
      this.taskService.updateTask(this.editTask).subscribe(()=>{this.getTasks()})
    }
    this.editTask = undefined;
  }

}

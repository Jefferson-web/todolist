import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Task } from '../interfaces/Task';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  task: Task;

  constructor(public dialogRef: MatDialogRef<TaskFormComponent>) { 
  }
  
  ngOnInit(): void {
    this.task = {
      description: ""
    }
  }

  Save(){
    this.dialogRef.close(this.task);
  }

}

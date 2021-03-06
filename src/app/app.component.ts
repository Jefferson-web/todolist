import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { State } from './interfaces/State';
import { StateService } from './services/state.service';
import { TaskService } from './services/task.service';
import { switchMap, tap } from 'rxjs/operators';
import { Task } from './interfaces/Task';
import { NotifierService } from 'angular-notifier';
import { MatDialog } from '@angular/material/dialog';
import { TaskFormComponent } from './task-form/task-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  states: State[];
  tasks: Task[];
  cols:number = 1; 

  constructor(private _taskService: TaskService,
    private _stateService: StateService,
    private notifier: NotifierService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this._stateService.GetStates().pipe(
      switchMap((response: any) => {
        this.states = response.states;
        this.cols = 12 / this.states.length;
        return this._taskService.GetTasks();
      })
    ).subscribe((response: any) => {
      this.tasks = response.tasks;
    });
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  createTask(state_id: string){
    const dialogRef = this.dialog.open(TaskFormComponent, {
      width: '500px'
    });
    dialogRef.afterClosed().subscribe((task: Task) => {
      if(!task || task.description == "") return;
      task.state = state_id;     
      this._taskService.CreateTask(task).subscribe(newTask => {
        this.tasks = [...this.tasks, newTask];
      });
    });
  }

}

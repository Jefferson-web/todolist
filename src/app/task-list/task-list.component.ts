import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AfterContentChecked, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { Task } from '../interfaces/Task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  @Output() onDrop: EventEmitter<CdkDragDrop<Task[]>> = new EventEmitter<CdkDragDrop<Task[]>>();
  private _tasks: Task[];
  private _stateId: string;

  constructor(private _taskRepository: TaskService,
            private notifier: NotifierService) { }

  ngOnInit(): void {
  }

  @Input('tasks')
  set tasks(tasks: Task[]) {
    if (!tasks) return;
    this._tasks = tasks.filter(task => task.state == this.stateId);
  }

  get tasks() {
    return this._tasks;
  }

  @Input('state_id')
  set stateId(stateId: string) {
    this._stateId = stateId;
  }

  get stateId() {
    return this._stateId;
  }

  drop(event: CdkDragDrop<Task[]>) {
    const clone = [...this.tasks];
    const prevSize = this.tasks.length;
    this.onDrop.emit(event);
    if (prevSize !== this.tasks.length) {
      let itemDragged;
      let result = this.tasks.filter(task => !clone.includes(task));
      if (result.length > 0) {
        itemDragged = result[0];
        itemDragged.state = this.stateId;
        this._taskRepository.ChangeState(itemDragged).subscribe(response => {          
          this.notifier.notify('success', 'Trea actualizada');
        }, err => {
          console.log(err);
        });
      }
    }
  }

}

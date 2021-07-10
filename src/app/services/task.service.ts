import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
import { State } from '../interfaces/State';
import { Observable } from 'rxjs';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService extends RestService {

  constructor(private http: HttpClient) {
    super();
  }

  GetTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  ChangeState(task: Task) {
    return this.http.put(this.url + `/${task.task_id}`, task);
  }

  get url() {
    return this.baseURL + '/Task';
  }

}

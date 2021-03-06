import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from './rest.service';
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
    console.log(this.url);
    return this.http.get<Task[]>(this.url);
  }

  ChangeState(task: Task) {
    return this.http.put(this.url + `/${task._id}`, task);
  }

  CreateTask(task: Task){
    return this.http.post(this.url, task);
  }

  get url() {
    return this.baseURL + '/Task';
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { State } from '../interfaces/State';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class StateService extends RestService{

  constructor(private http: HttpClient) {
    super();
  }

  GetStates(): Observable<State[]> {
    return this.http.get<State[]>(this.url);
  }

  get url(){
    return this.baseURL + '/State';
  }

}

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  readonly baseURL: string = environment.APIEndpoint;

  constructor() { }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  readonly baseURL: string = 'https://localhost:44370/api';

  constructor() { }
}

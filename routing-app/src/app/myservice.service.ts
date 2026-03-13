import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  getMessage1(): string {
    return "Hello from Backend Service";
  }

  getMessage2(): string {
    return "Hello from Frontend Service";
  }

}

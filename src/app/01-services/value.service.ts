import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  getValue(): string{
    return 'real value';
  }

  getObservableValue(): Observable<string>{
    return of('observable value')
  }

  getPromiseVAlue(): Promise<string>{
    return new Promise((resolve)=>{
      resolve('promise value');
    })
  }

  constructor() { }
}

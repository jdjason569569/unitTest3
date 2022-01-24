import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users = [];
  url: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private hhtp: HttpClient) { }

  getUsers(): void{
    this.getUsersFromApi().subscribe((response)=>{
         this.users = response;
    });
  }

  private getUsersFromApi(): Observable<any>{
   return this.hhtp.get(this.url);
  }
}

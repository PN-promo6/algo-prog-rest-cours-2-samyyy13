import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UserComponent } from '../../models/user/user/user.component'

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private httpClient: HttpClient) { }

public fetchUsers(): Observable<UserComponent[]>{
  let usersObservable: Observable<UserComponent[]> = this.httpClient.get<UserComponent[]>('http://localhost:3000/users');
  return usersObservable;
  }

  public fetchUsersById(id: string): Observable<any>{
    let usersObservableById: Observable<any> = this.httpClient.get('http://localhost:3000/users' + id);
    return usersObservableById;
    }
}

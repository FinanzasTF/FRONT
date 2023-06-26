import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/assets/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl: string = ` http://localhost:8105/user`;

  constructor(private http: HttpClient) { }

  addUser(user: User): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/validation/${email}/${password}`);
  }
}

//validation/{email}/{password}
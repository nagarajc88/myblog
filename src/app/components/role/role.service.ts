import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Role } from './role';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }
  private USERS: Role[] = [
    {
        firstName: 'Jane',
        lastName: 'Doe',
        username: "nagarj",
        email: "nagaraj@gmail.com",
        status: "active"
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        username: "nagarj",
        email: "nagaraj@gmail.com",
        status: "active"
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        username: "nagarj",
        email: "nagaraj@gmail.com",
        status: "active"
    }
];

  getRoles(): Role[]{
      return this.USERS;
  }
}
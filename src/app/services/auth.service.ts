import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username: string;

  getUsername(): string {
    console.log('this.username', this.username);
    return this.username;
  }
  setUsername(username) {
    this.username = username;
    console.log('New user name: ', username);
  }
  constructor() {}
}

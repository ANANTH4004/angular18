import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  User: string = 'Admin';
  constructor() {}

  getLoginStatus(): boolean {
    return this.User == 'User';
  }

  userLogin() {
    this.User = 'User';
  }
}

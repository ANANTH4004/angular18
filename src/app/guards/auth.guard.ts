import { CanActivateChildFn, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  console.log('inside aith guard', auth);
  return auth.getLoginStatus();
};

export const childGuard: CanActivateChildFn = (route, state) => {
  const isAllows = 'Admin';
  return isAllows === 'Admin';
};

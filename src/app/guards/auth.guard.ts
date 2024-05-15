import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
  const router = inject(Router);
  if(userService.getLoginStatus()){
      console.log("logged in");
      return true;
  }
  else{
    console.log("not logged in");
    router.navigate(['/login']);
    return false;
  }
};

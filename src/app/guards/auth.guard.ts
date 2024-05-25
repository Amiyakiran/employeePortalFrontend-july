import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = () => {
  const authStatus = inject(AuthService)
  const router = inject(Router)

  if(authStatus.islogged()){
    return true;
  }else{
    Swal.fire({
      icon: "info",
      title: "Oops...",
      text: "Please login"
    });
    router.navigateByUrl("")
    return false
  }
  
};

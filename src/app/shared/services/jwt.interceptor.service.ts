import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService {
  constructor(private authService:AuthService) { }
  intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{
    const token=this.authService.getToken();
    if(token)
    {
      request=request.clone({
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      });
    }
    return next.handle(request);

  }


}

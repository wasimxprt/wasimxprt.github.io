import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable()
export class AuthinterceptorInterceptor implements HttpInterceptor {

  auth_token = "266adbnb@#78bakhsd6jb-8998123uAHGHHSJK";

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenizedReq = request.clone({
      setHeaders: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${this.auth_token}`
      }
    })
    return next.handle(tokenizedReq).pipe(retry(1));
  }
}

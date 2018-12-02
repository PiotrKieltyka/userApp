import { IUserAuthResponse } from './interfaces/userAuthResponse';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { filter, map, shareReplay, tap } from 'rxjs/operators';
import { IUser } from './interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ANONYMOUS_USER: IUser = { _id: undefined, firstName: 'Stranger' };
  private userSubject = new BehaviorSubject<IUser>(undefined);
  user$: Observable<IUser> = this.userSubject.asObservable().pipe(filter(user => !!user));

  isLoggedIn$: Observable<boolean> = this.user$.pipe(map(user => !!user));
  isLoggedOut$: Observable<boolean> = this.isLoggedIn$.pipe(map(isLoggedIn => !isLoggedIn));

  private userCreatedSubject = new Subject;
  userCreated$ = this.userCreatedSubject.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  signin(email: string, password: string) {
    return this.http.post<IUserAuthResponse>(`http://localhost:3010/api/signin`, { email, password }, this.addHeaders()).pipe(
      tap(res => this.userSubject.next(res)),
    );
  }

  signout() {
    return this.http.post<any>(`http://localhost:3010/api/signout`, null, this.addHeaders()).pipe(
      tap( () => this.userSubject.next(this.ANONYMOUS_USER))
    );
  }

  signup(user: IUser) {
    return this.http.post<IUserAuthResponse>(`http://localhost:3010/api/signup`, user, this.addHeaders()).pipe(
      tap(res => this.userSubject.next(res)),
      tap( () => this.userCreatedSubject.next())
    );
  }

  addHeaders() {
    const headers = new HttpHeaders();
    return {
      headers,
    };
  }
}

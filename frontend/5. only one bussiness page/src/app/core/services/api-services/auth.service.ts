import { AppConfigService } from '../util-services/app-config.service';
import { Subject ,  Observable } from 'rxjs';
import { HttpResponseBody } from '../../objects/HttpResponseBody';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLogin } from '../../objects/UserLogin';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  permissionsLoaded = false;
  private logoutEvent = new Subject();
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private API_AA_URL;

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private appConfig: AppConfigService) {
    this.API_AA_URL = appConfig.getConfig().API_AA_URL;
  }

  login(user: UserLogin) {
    return this.http.post(`${this.API_AA_URL}/login`, JSON.stringify(user), { observe: 'response' });
  }

  getUser(): Observable<HttpResponseBody> {
    return this.http.post<HttpResponseBody>(`${this.API_AA_URL}/user`, {});
  }

  changePassword(oldPassword: string, newPassword: string): Observable<HttpResponseBody> {
    return this.http.post<HttpResponseBody>(`${this.API_AA_URL}/user/change/password/${oldPassword}/${newPassword}`, {});
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('access_token');
    if (token == null) {
      return false;
    }

    console.log('Decode Token', this.jwtHelper.decodeToken(token));
    console.log('Token Expiry', this.jwtHelper.isTokenExpired(token));
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  public isPermissionsLoaded(): boolean {
    return this.permissionsLoaded;
  }

  public logout() {
    this.http.post(`${this.API_AA_URL}/user/logout`, {}, { headers: this.headers }).subscribe(
      res => {
        console.log('Logout Successful');
        localStorage.removeItem('access_token');
        localStorage.removeItem('clinicId');
        localStorage.removeItem('clinicCode');
        this.logoutEvent.next();
      },
      err => {
        console.log('Logout Failed');
        localStorage.removeItem('access_token');
        localStorage.removeItem('clinicId');
        localStorage.removeItem('clinicCode');
        this.logoutEvent.next();
      }
    );
  }

  triggerLogout() {
    this.logoutEvent.next();
  }

  isLogout() {
    return this.logoutEvent.asObservable();
  }
}

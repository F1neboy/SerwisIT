import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Zlecenia} from "../../zlecenia";
import {Users} from "../../users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl=environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getUser(id: number): Observable<Users> {
    return this.httpClient.get<Users>(this.baseUrl + 'user/' + id);
  }

  public getUsers():Observable<Users[]>{
    return this.httpClient.get<Users[]>(this.baseUrl+'user/all');
  }

  public addUser(user: Users):Observable<Users>{
    return this.httpClient.post<Users>(this.baseUrl+'adduser', user);
  }

  public setUser(id: number, user: Users):Observable<Users>{
    return this.httpClient.put<Users>(this.baseUrl+'setuser/'+id, user);
  }

  public getUserByMail(mail: string): Observable<Users> {
    return this.httpClient.get<Users>(this.baseUrl + 'user/m/' + mail);
  }
  public getUserByPhone(phone: number): Observable<Users>{
    return this.httpClient.get<Users>(this.baseUrl+'user/p/'+phone);
  }
}

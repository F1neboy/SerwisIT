import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Zlecenia} from "../../zlecenia";

@Injectable({
  providedIn: 'root'
})
export class ZleceniaService {

  baseUrl=environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  public getZlecenia(id: number): Observable<Zlecenia>{
    return this.httpClient.get<Zlecenia>(this.baseUrl+'zlecenie/'+id);
  }

  public getZleceniaAll(): Observable<Zlecenia[]>{
    return this.httpClient.get<Zlecenia[]>(this.baseUrl+'zlecenie/all');
  }

  public addZlecenie(zlecenia: Zlecenia): Observable<Zlecenia>{
    return this.httpClient.post<Zlecenia>(this.baseUrl+'zlecenie/add', zlecenia);
  }

  public setZlecenie(id: number, zlecenie: Zlecenia): Observable<Zlecenia>{
    return this.httpClient.put<Zlecenia>(this.baseUrl+'setzlecenie/'+id, zlecenie)
  }

}

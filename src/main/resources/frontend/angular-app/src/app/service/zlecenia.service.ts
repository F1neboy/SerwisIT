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
    return this.httpClient.get<Zlecenia>(this.baseUrl+'/'+id);
  }

}

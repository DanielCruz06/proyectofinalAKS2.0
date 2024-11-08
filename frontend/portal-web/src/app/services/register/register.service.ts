import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Usuario } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  // función para enviar la creación del nuevo usuario
  public register(user: Usuario): Observable<HttpResponse<any>> {
    return this.http.post<any>(`/register`, user, { observe: 'response' });
  }
}

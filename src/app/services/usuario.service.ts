import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

   private apiUrl = 'http://localhost:5062/api/Usuario';

   constructor(private http: HttpClient) { }

   //Metodo para cadastrar usuario
   cadastrar(usuario: Usuario): Observable<Usuario>{
      return this.http.post<Usuario>(`${this.apiUrl}/AdicionarUsuario`,usuario);
   }

   login(usuario: { email: string; senha: string; role?: string }): Observable<{ token: string }> {
      return this.http.post<{ token: string }>(`${this.apiUrl}/login`, usuario);
   }

}

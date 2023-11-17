import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diretor } from './Diretor';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  apiUrl = 'http://localhost:5000/Diretor';
  constructor(private http: HttpClient) { }
  listar(): Observable<Diretor[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Diretor[]>(url);
  }
  buscar(nome: string): Observable<Diretor> {
    const url = `${this.apiUrl}/buscar/${nome}`;
    return this.http.get<Diretor>(url);
  }
  cadastrar(diretor: Diretor): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Diretor>(url, diretor, httpOptions);
  }
  atualizar(diretor: Diretor): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Diretor>(url, diretor, httpOptions);
  }
  excluir(nome: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${nome}`;
    return this.http.delete<string>(url, httpOptions);
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FuncionarioADM } from './FuncionarioADM';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FuncionarioADMsService {
  apiUrl = 'http://localhost:5000/FuncionarioADM';
  constructor(private http: HttpClient) { }
  listar(): Observable<FuncionarioADM[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<FuncionarioADM[]>(url);
  }
  buscar(nome: string): Observable<FuncionarioADM> {
    const url = `${this.apiUrl}/buscar/${nome}`;
    return this.http.get<FuncionarioADM>(url);
  }
  cadastrar(funcionarioADM: FuncionarioADM): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<FuncionarioADM>(url, funcionarioADM, httpOptions);
  }
  atualizar(funcionarioADM: FuncionarioADM): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<FuncionarioADM>(url, funcionarioADM, httpOptions);
  }
  excluir(nome: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${nome}`;
    return this.http.delete<string>(url, httpOptions);
  }
}

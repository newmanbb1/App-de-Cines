import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { salaCreacionDTO, salaDTO } from './salas';
@Injectable({
  providedIn: 'root'
})
export class SalasService {
  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'salas';

  public obtenerPaginado(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<salaDTO[]>(this.apiURL, {observe: 'response', params});
  }

  public obtenerTodos(){
    return this.http.get<salaDTO[]>(`${this.apiURL}/todos`);
  }

  public obtenerPorId(id: number): Observable<salaDTO>{
    return this.http.get<salaDTO>(`${this.apiURL}/${id}`);
  }

  public crear(sala: salaCreacionDTO) {
    return this.http.post(this.apiURL, sala);
  }

  public editar(id: number, sala: salaCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, sala);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}

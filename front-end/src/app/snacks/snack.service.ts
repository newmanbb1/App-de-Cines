import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { snackCreacionDTO, snackDTO } from './snack';

@Injectable({
  providedIn: 'root'
})
export class SnackService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiURL + 'snacks';

  public obtenerPaginado(pagina: number, cantidadRegistrosAMostrar: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('pagina', pagina.toString());
    params = params.append('recordsPorPagina', cantidadRegistrosAMostrar.toString());
    return this.http.get<snackDTO[]>(this.apiURL, {observe: 'response', params});
  }

 public obtenerTodos(){
    return this.http.get<snackDTO[]>(`${this.apiURL}/todos`);
  }

  public obtenerPorId(id: number): Observable<snackDTO>{
    return this.http.get<snackDTO>(`${this.apiURL}/${id}`);
  }

  public crear(snack: snackCreacionDTO) {
    return this.http.post(this.apiURL, snack);
  }

  public editar(id: number, snack: snackCreacionDTO){
    return this.http.put(`${this.apiURL}/${id}`, snack);
  }

  public borrar(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}

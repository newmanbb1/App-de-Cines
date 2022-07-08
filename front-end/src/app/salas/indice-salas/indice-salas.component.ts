import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { salaDTO } from '../salas';
import { SalasService } from '../salas.service';
@Component({
  selector: 'app-indice-salas',
  templateUrl: './indice-salas.component.html',
  styleUrls: ['./indice-salas.component.css']
})
export class IndiceSalasComponent implements OnInit {

  constructor(private salasService: SalasService) { }

  @ViewChild('table')
  table: MatTable<any>;

  salas: salaDTO[];
  columnasAMostrar = ['id', 'nombre','sillas', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.salasService.obtenerPaginado(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<salaDTO[]>) => {
      this.salas = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number){
    this.salasService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }

}

import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { snackDTO } from '../snack';
import { SnackService } from '../snack.service';

@Component({
  selector: 'app-indice-snack',
  templateUrl: './indice-snack.component.html',
  styleUrls: ['./indice-snack.component.css']
})
export class IndiceSnackComponent implements OnInit {

  constructor(private snackService: SnackService) { }

  @ViewChild('table')
  table: MatTable<any>;

  snaks: snackDTO[];
  columnasAMostrar = ['id', 'nombre','precio', 'acciones'];
  cantidadTotalRegistros;
  paginaActual = 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  cargarRegistros(pagina: number, cantidadElementosAMostrar){
    this.snackService.obtenerPaginado(pagina, cantidadElementosAMostrar)
    .subscribe((respuesta: HttpResponse<snackDTO[]>) => {
      this.snaks = respuesta.body;
      this.cantidadTotalRegistros = respuesta.headers.get("cantidadTotalRegistros");
    }, error => console.error(error));
  }

  actualizarPaginacion(datos: PageEvent){
    this.paginaActual = datos.pageIndex + 1;
    this.cantidadRegistrosAMostrar = datos.pageSize;
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }

  borrar(id: number){
    this.snackService.borrar(id)
    .subscribe(() => {
      this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
    }, error => console.error(error));
  }


}

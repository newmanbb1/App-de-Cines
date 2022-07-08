import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { salaCreacionDTO } from '../salas';
import { SalasService } from '../salas.service';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
@Component({
  selector: 'app-crear-sala',
  templateUrl: './crear-sala.component.html',
  styleUrls: ['./crear-sala.component.css']
})
export class CrearSalaComponent  {
  errores: string[] = [];
  constructor(private router:Router,private salasService:SalasService) { }

  guardarCambios(sala: salaCreacionDTO ) {
    this.salasService.crear(sala).subscribe(
      () => {
        this.router.navigate(['/salas']);
      },
      (error) => this.errores = parsearErroresAPI(error)
    );
  }
}

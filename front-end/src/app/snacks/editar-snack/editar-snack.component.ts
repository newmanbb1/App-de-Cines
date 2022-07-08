import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { snackCreacionDTO, snackDTO } from '../snack';
import { SnackService } from '../snack.service';

@Component({
  selector: 'app-editar-snack',
  templateUrl: './editar-snack.component.html',
  styleUrls: ['./editar-snack.component.css']
})
export class EditarSnackComponent implements OnInit {

  constructor(
    private router: Router,
    private snackService: SnackService,
    private activatedRoute: ActivatedRoute
  ) {}

  modelo: snackDTO;
  errores: string[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.snackService.obtenerPorId(params.id)
      .subscribe(genero => {
        this.modelo = genero;
      }, () => this.router.navigate(['/generos']))
    });
  }

  guardarCambios(genero: snackCreacionDTO) {
    this.snackService.editar(this.modelo.id, genero)
    .subscribe(() => {
      this.router.navigate(['/generos']);
    }, error => this.errores = parsearErroresAPI(error))
  }

}

import { Component,  } from '@angular/core';
import { Router } from '@angular/router';
import { parsearErroresAPI } from 'src/app/utilidades/utilidades';
import { snackCreacionDTO } from '../snack';
import { SnackService } from '../snack.service';

@Component({
  selector: 'app-crear-snack',
  templateUrl: './crear-snack.component.html',
  styleUrls: ['./crear-snack.component.css'],
})
export class CrearSnackComponent  {
  errores: string[] = [];
  constructor(private router: Router, private snackService: SnackService) {}
  guardarCambios(snack:snackCreacionDTO ) {
    this.snackService.crear(snack).subscribe(
      () => {
        this.router.navigate(['/snacks']);
      },
      (error) => (this.errores = parsearErroresAPI(error))
    );
  }
}

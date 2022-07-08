import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { snackCreacionDTO } from '../snack';

@Component({
  selector: 'app-formulario-snack',
  templateUrl: './formulario-snack.component.html',
  styleUrls: ['./formulario-snack.component.css']
})
export class FormularioSnackComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  errores: string[] = [];

  @Input()
  modelo: snackCreacionDTO;

  @Output()
  onSubmit: EventEmitter<snackCreacionDTO> = new EventEmitter<snackCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }],
      precio: ['', {
        validators: [Validators.required]
      }]
    });

    if (this.modelo !== undefined){
      this.form.patchValue(this.modelo);
    }
  }

  guardarCambios(){
    this.onSubmit.emit(this.form.value);
  }

  obtenerErrorCampoNombre(){
    var campo = this.form.get('nombre');
    if (campo.hasError('required')){
      return 'El campo nombre es requerido';
    }

    if (campo.hasError('minlength')){
      return 'La longitud mínima es de 3 caracteres'
    }

    if (campo.hasError('primeraLetraMayuscula')){
      return campo.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }
  }



import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from 'src/app/utilidades/validadores/primeraLetraMayuscula';
import { salaCreacionDTO } from '../salas';
@Component({
  selector: 'app-formulario-salas',
  templateUrl: './formulario-salas.component.html',
  styleUrls: ['./formulario-salas.component.css']
})
export class FormularioSalasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  @Input()
  errores: string[] = [];

  @Input()
  modelo: salaCreacionDTO;

  @Output()
  onSubmit: EventEmitter<salaCreacionDTO> = new EventEmitter<salaCreacionDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', {
        validators: [Validators.required, Validators.minLength(3), primeraLetraMayuscula()]
      }],
      numeroSillas:['']
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

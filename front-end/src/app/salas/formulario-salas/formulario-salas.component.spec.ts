import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSalasComponent } from './formulario-salas.component';

describe('FormularioSalasComponent', () => {
  let component: FormularioSalasComponent;
  let fixture: ComponentFixture<FormularioSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSalasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

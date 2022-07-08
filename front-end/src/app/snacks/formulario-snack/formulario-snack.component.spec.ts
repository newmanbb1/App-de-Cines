import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSnackComponent } from './formulario-snack.component';

describe('FormularioSnackComponent', () => {
  let component: FormularioSnackComponent;
  let fixture: ComponentFixture<FormularioSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioSnackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

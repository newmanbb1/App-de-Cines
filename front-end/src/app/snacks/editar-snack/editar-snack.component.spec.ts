import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSnackComponent } from './editar-snack.component';

describe('EditarSnackComponent', () => {
  let component: EditarSnackComponent;
  let fixture: ComponentFixture<EditarSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSnackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

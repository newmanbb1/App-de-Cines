import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearSnackComponent } from './crear-snack.component';

describe('CrearSnackComponent', () => {
  let component: CrearSnackComponent;
  let fixture: ComponentFixture<CrearSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearSnackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

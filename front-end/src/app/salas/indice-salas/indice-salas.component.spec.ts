import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceSalasComponent } from './indice-salas.component';

describe('IndiceSalasComponent', () => {
  let component: IndiceSalasComponent;
  let fixture: ComponentFixture<IndiceSalasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceSalasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceSalasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

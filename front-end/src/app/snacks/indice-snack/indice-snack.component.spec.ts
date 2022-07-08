import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiceSnackComponent } from './indice-snack.component';

describe('IndiceSnackComponent', () => {
  let component: IndiceSnackComponent;
  let fixture: ComponentFixture<IndiceSnackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndiceSnackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiceSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

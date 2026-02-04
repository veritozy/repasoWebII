import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesDestacados } from './pacientes-destacados';

describe('PacientesDestacados', () => {
  let component: PacientesDestacados;
  let fixture: ComponentFixture<PacientesDestacados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacientesDestacados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientesDestacados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

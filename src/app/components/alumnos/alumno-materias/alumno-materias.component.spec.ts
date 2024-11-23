import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoMateriasComponent } from './alumno-materias.component';

describe('AlumnoMateriasComponent', () => {
  let component: AlumnoMateriasComponent;
  let fixture: ComponentFixture<AlumnoMateriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoMateriasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnoMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

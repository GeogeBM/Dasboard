import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PBodyComponent } from './p-body.component';

describe('PBodyComponent', () => {
  let component: PBodyComponent;
  let fixture: ComponentFixture<PBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PBodyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

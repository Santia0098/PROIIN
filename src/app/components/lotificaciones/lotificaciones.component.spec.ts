import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotificacionesComponent } from './lotificaciones.component';

describe('LotificacionesComponent', () => {
  let component: LotificacionesComponent;
  let fixture: ComponentFixture<LotificacionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotificacionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

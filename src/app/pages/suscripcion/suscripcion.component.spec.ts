import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuscripcionComponent } from './suscripcion.component';

describe('SuscripcionComponent', () => {
  let component: SuscripcionComponent;
  let fixture: ComponentFixture<SuscripcionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuscripcionComponent]
    });
    fixture = TestBed.createComponent(SuscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

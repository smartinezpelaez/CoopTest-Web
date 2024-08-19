import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondoComponent } from './fondo.component';

describe('FondoComponent', () => {
  let component: FondoComponent;
  let fixture: ComponentFixture<FondoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondoComponent]
    });
    fixture = TestBed.createComponent(FondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

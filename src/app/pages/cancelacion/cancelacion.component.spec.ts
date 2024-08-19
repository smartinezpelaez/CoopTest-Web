import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelacionComponent } from './cancelacion.component';

describe('CancelacionComponent', () => {
  let component: CancelacionComponent;
  let fixture: ComponentFixture<CancelacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancelacionComponent]
    });
    fixture = TestBed.createComponent(CancelacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

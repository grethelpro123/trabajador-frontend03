import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajadoresTablaComponent } from './trabajadores-tabla.component';

describe('TrabajadoresTablaComponent', () => {
  let component: TrabajadoresTablaComponent;
  let fixture: ComponentFixture<TrabajadoresTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrabajadoresTablaComponent]
    });
    fixture = TestBed.createComponent(TrabajadoresTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

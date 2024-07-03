import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTrabajadorComponent } from './editar-trabajador.component';

describe('EditarTrabajadorComponent', () => {
  let component: EditarTrabajadorComponent;
  let fixture: ComponentFixture<EditarTrabajadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarTrabajadorComponent]
    });
    fixture = TestBed.createComponent(EditarTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

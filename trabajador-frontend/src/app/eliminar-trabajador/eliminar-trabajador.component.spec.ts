import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarTrabajadorComponent } from './eliminar-trabajador.component';

describe('EliminarTrabajadorComponent', () => {
  let component: EliminarTrabajadorComponent;
  let fixture: ComponentFixture<EliminarTrabajadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarTrabajadorComponent]
    });
    fixture = TestBed.createComponent(EliminarTrabajadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

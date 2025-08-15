import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoracionFormComponent } from './valoracion-form.component';

describe('ValoracionFormComponent', () => {
  let component: ValoracionFormComponent;
  let fixture: ComponentFixture<ValoracionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValoracionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValoracionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

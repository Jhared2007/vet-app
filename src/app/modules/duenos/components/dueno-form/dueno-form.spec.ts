import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenoForm } from './dueno-form';

describe('DuenoForm', () => {
  let component: DuenoForm;
  let fixture: ComponentFixture<DuenoForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuenoForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuenoForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

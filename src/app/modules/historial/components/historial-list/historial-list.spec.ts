import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialList } from './historial-list';

describe('HistorialList', () => {
  let component: HistorialList;
  let fixture: ComponentFixture<HistorialList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

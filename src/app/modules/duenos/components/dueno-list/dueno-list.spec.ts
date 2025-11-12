import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuenoList } from './dueno-list';

describe('DuenoList', () => {
  let component: DuenoList;
  let fixture: ComponentFixture<DuenoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuenoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuenoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

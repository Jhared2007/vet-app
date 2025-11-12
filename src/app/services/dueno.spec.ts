import { TestBed } from '@angular/core/testing';

import { Dueno } from './dueno';

describe('Dueno', () => {
  let service: Dueno;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dueno);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

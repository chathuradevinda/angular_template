import { TestBed } from '@angular/core/testing';

import { ExistingAddService } from './existing-add.service';

describe('ExistingAddService', () => {
  let service: ExistingAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExistingAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MultipleAddService } from './multiple-add.service';

describe('MultipleAddService', () => {
  let service: MultipleAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

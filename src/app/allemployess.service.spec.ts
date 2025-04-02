import { TestBed } from '@angular/core/testing';

import { AllemployessService } from './allemployess.service';

describe('AllemployessService', () => {
  let service: AllemployessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllemployessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

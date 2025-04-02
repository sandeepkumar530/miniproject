import { TestBed } from '@angular/core/testing';

import { CreatemployeeService } from './createmployee.service';

describe('CreatemployeeService', () => {
  let service: CreatemployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatemployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

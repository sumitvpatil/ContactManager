import { TestBed } from '@angular/core/testing';

import { LogHomeService } from './log-home.service';

describe('LogHomeService', () => {
  let service: LogHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

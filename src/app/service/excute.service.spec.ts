import { TestBed } from '@angular/core/testing';

import { ExcuteService } from './excute.service';

describe('ExcuteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcuteService = TestBed.get(ExcuteService);
    expect(service).toBeTruthy();
  });
});

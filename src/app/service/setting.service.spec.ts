import { TestBed } from '@angular/core/testing';

import { SettingService } from './setting.service';

describe('ConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SettingService = TestBed.get(SettingService);
    expect(service).toBeTruthy();
  });
});

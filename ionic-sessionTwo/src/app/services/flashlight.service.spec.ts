import { TestBed } from '@angular/core/testing';

import { FlashlightService } from './flashlight.service';

describe('FlashlightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlashlightService = TestBed.get(FlashlightService);
    expect(service).toBeTruthy();
  });
});

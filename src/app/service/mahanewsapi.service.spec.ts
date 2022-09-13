import { TestBed } from '@angular/core/testing';

import { MahanewsapiService } from './mahanewsapi.service';

describe('MahanewsapiService', () => {
  let service: MahanewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MahanewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

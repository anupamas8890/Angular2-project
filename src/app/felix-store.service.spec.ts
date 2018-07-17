import { TestBed, inject } from '@angular/core/testing';

import { FelixStoreService } from './felix-store.service';

describe('FelixStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FelixStoreService]
    });
  });

  it('should be created', inject([FelixStoreService], (service: FelixStoreService) => {
    expect(service).toBeTruthy();
  }));
});

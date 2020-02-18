import { TestBed } from '@angular/core/testing';

import { QiscusServiceService } from './qiscus-service.service';

describe('QiscusServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QiscusServiceService = TestBed.get(QiscusServiceService);
    expect(service).toBeTruthy();
  });
});

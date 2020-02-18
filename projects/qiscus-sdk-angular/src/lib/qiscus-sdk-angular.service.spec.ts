import { TestBed } from '@angular/core/testing';

import { QiscusSdkAngularService } from './qiscus-sdk-angular.service';

describe('qiscusSdkAngularService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: QiscusSdkAngularService = TestBed.get(QiscusSdkAngularService);
        expect(service).toBeTruthy();
    });
});

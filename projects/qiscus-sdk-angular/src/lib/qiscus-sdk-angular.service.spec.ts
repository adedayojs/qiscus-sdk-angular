import { TestBed } from '@angular/core/testing';

import { qiscusSdkAngularService } from './qiscus-sdk-angular.service';

describe('qiscusSdkAngularService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: qiscusSdkAngularService = TestBed.get(qiscusSdkAngularService);
        expect(service).toBeTruthy();
    });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { qiscusSdkAngularComponent } from './qiscus-sdk-angular.component';

describe('qiscusSdkAngularComponent', () => {
    let component: qiscusSdkAngularComponent;
    let fixture: ComponentFixture<qiscusSdkAngularComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [qiscusSdkAngularComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(qiscusSdkAngularComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

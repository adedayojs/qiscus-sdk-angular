import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QiscusSdkAngularComponent } from './qiscus-sdk-angular.component';

describe('QiscusSdkAngularComponent', () => {
    let component: QiscusSdkAngularComponent;
    let fixture: ComponentFixture<QiscusSdkAngularComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [QiscusSdkAngularComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(QiscusSdkAngularComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

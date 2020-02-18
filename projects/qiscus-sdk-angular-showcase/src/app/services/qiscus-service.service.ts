import { Injectable } from '@angular/core';
import { QiscusSdkAngularService } from 'qiscus-sdk-angular';

@Injectable({
    providedIn: 'root'
})
export class QiscusServiceService {
    constructor(private qiscusService: QiscusSdkAngularService) {}
    logQiscusLogger() {
        this.qiscusService.logger();
    }
    displayList() {
        return this.qiscusService.listToDisplay();
    }
}

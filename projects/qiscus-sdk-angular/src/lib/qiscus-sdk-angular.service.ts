import { Injectable } from '@angular/core';
import Qiscus from 'qiscus-sdk-core';

@Injectable({
    providedIn: 'root'
})
export class QiscusSdkAngularService {
    private qiscus;
    constructor() {
        console.log(this.qiscus);
        this.qiscus = this.qiscus || new Qiscus(); // This is to make sure that no other instance is rendered
        console.log('****** I am initializing');
        console.log(this.qiscus);
    }
    initialize(appId: string, options?: { [key: string]: string }) {
        if (options) {
            this.qiscus.init({
                AppId: appId,
                options: { ...options }
            });
            return;
        }
        this.qiscus.init({
            AppId: appId
        });
    }
    logger(): void {
        console.log('This is quscus service logger');
    }
    listToDisplay(): Array<number> {
        return [1, 2, 3, 4, 5, 6, 7];
    }
}

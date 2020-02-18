import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class qiscusSdkAngularService {
    constructor() {}
    logger(): void {
        console.log('This is quscus service logger');
    }
    listToDisplay(): Array<number> {
        return [1, 2, 3, 4, 5, 6, 7];
    }
}

import { Component, OnInit } from '@angular/core';
import { QiscusServiceService } from '../../services/qiscus-service.service';

@Component({
    selector: 'app-sample',
    templateUrl: './sample.component.html',
    styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
    items: Array<number>;
    constructor(private qiscusService: QiscusServiceService) {}

    ngOnInit() {
        this.listGetter();
    }
    listGetter() {
        this.items = this.qiscusService.displayList();
    }
}

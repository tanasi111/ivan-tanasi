import { Component } from '@angular/core';

import { GlobalDataService } from './global-data.service';

@Component({
    selector: 'app-interest',
    templateUrl: './interest.component.html',
    styleUrls: ['./interest.component.css']
})
export class InterestComponent {
    constructor(private globalData: GlobalDataService) {
        this.globalData.shareObj['background'] = 'interest-background';
    }
}

import { Component } from '@angular/core';

import { GlobalDataService } from './global-data.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent {
    constructor(private globalData: GlobalDataService) {
        this.globalData.shareObj['background'] = 'about-background';
    }
}

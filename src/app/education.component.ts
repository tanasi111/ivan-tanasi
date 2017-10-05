import { Component } from '@angular/core';

import { GlobalDataService } from './global-data.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css']
})
export class EducationComponent {
    constructor(private globalData: GlobalDataService) {
        this.globalData.shareObj['background'] = 'about-background';
    }
}

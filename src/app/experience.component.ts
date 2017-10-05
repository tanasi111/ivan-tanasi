import { Component, OnInit } from '@angular/core';

import { Experience } from './experience';
import { ExperienceService } from './experience.service';
import { GlobalDataService } from './global-data.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    experiences: Experience[];

    constructor(private experienceService: ExperienceService, private globalData: GlobalDataService) {
        this.globalData.shareObj['background'] = 'exp-background';
    }

    getExperiences(): void {
        this.experienceService.getExperiences().then(experiences => this.experiences = experiences);
    }

    ngOnInit(): void {
        this.getExperiences();
    }
}

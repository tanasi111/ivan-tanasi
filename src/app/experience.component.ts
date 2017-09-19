import { Component, OnInit } from '@angular/core';

import { Experience } from './experience';
import { ExperienceService } from './experience.service';

@Component({
    selector: 'experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
    experiences: Experience[];

    constructor(private experienceService: ExperienceService) { }

    getExperiences(): void {
        this.experienceService.getExperiences().then(experiences => this.experiences = experiences);
    }

    ngOnInit(): void {
        this.getExperiences();
    }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Experience } from './experience';

@Injectable()

export class ExperienceService {

    private experiencesUrl = 'api/experiences'; // URL to web api

    constructor(private http: Http) { }

    getExperiences(): Promise<Experience[]> {
        return this.http.get(this.experiencesUrl)
            .toPromise()
            .then(response => response.json().data as Experience[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
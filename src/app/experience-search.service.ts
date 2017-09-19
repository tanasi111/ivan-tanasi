import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Experience } from './experience';

@Injectable()
export class ExperienceSearchService {

    constructor(private http: Http) { }

    search(term: string): Observable<Experience[]> {
        return this.http
            .get(`api/experiences/?name=${term}`)
            .map(response => response.json().data as Experience[]);
    }
}

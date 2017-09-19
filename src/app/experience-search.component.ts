import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { ExperienceSearchService } from './experience-search.service';
import { Experience } from './experience';

@Component({
    selector: 'app-experience-search',
    templateUrl: './experience-search.component.html',
    styleUrls: ['./experience-search.component.css'],
    providers: [ExperienceSearchService]
})
export class ExperienceSearchComponent implements OnInit {
    experiences: Observable<Experience[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private experienceSearchService: ExperienceSearchService) { }

    // Push a search term into the observable stream.
    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.experiences = this.searchTerms
            .debounceTime(300)        // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time the term changes
                // return the http search observable
                ? this.experienceSearchService.search(term)
                // or the observable of empty heroes if there was no search term
                : Observable.of<Experience[]>([]))
            .catch(error => {
                // TODO: add real error handling
                console.log(error);
                return Observable.of<Experience[]>([]);
            });
    }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './experience.component';
import { EducationComponent } from './education.component';
import { InterestComponent } from './interest.component';

const routes: Routes = [
    { path: '', redirectTo: '/experience', pathMatch: 'full' },
    { path: 'experience', component: ExperienceComponent },
    { path: 'education', component: EducationComponent },
    { path: 'interest', component: InterestComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

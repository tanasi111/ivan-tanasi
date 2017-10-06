import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExperienceComponent } from './experience.component';
import { AboutComponent } from './about.component';
import { InterestComponent } from './interest.component';

const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'experience', component: ExperienceComponent },
    { path: 'about', component: AboutComponent },
    { path: 'interest', component: InterestComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

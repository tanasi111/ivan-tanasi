import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdSidenavModule, MdCardModule, MdListModule, 
         MdTabsModule, MdChipsModule, MdProgressSpinnerModule, MdInputModule, MdFormFieldModule, MdSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav.component';
import { ExperienceComponent } from './experience.component';
import { EducationComponent } from './education.component';
import { InterestComponent } from './interest.component';
import { ExperienceService } from './experience.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ExperienceComponent,
    EducationComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    AppRoutingModule,
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule,
    MdCardModule,
    MdListModule,
    MdTabsModule,
    MdChipsModule,
    MdProgressSpinnerModule,
    MdInputModule,
    MdFormFieldModule,
    MdSelectModule
  ],
  providers: [ExperienceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdButtonModule, MdSidenavModule, MdCardModule, MdListModule, MdTabsModule } from '@angular/material';

import { AppComponent } from './app.component';

import { SidenavComponent } from './sidenav.component';
import { ExperienceComponent } from './experience.component';
import { EducationComponent } from './education.component';
import { InterestComponent } from './interest.component';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    MdToolbarModule,
    MdButtonModule,
    MdSidenavModule,
    MdCardModule,
    MdListModule,
    MdTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

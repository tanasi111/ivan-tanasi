import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatToolbarModule, MatButtonModule, MatSidenavModule, MatCardModule, MatListModule,
  MatTabsModule, MatChipsModule, MatProgressSpinnerModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatTooltipModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav.component';
import { ExperienceComponent } from './experience.component';
import { AboutComponent } from './about.component';
import { ExperienceService } from './experience.service';
import { FilterPipe } from './filter.pipe';

import { GlobalDataService } from './global-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ExperienceComponent,
    AboutComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatTabsModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule
  ],
  providers: [ExperienceService, GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

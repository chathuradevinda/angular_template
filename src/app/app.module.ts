import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard.component';
import { UserListComponent } from './features/dashboard/user-list/user-list.component';
import { AddParticipantsComponent } from './features/participants/add-participants/add-participants.component';
import { EditParticipantsComponent } from './features/participants/edit-participants/edit-participants.component';
import { StatisticsComponent } from './features/dashboard/statistics/statistics.component';
import { LoginComponent } from './core/components/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserListComponent,
    AddParticipantsComponent,
    EditParticipantsComponent,
    StatisticsComponent,
    LoginComponent,
    PageNotFoundComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

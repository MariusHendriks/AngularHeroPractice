import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';

import { ReactiveFormsModule } from '@angular/forms';

import { AbilityModule } from '@casl/angular';
import { Ability, PureAbility } from '@casl/ability';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AbilityModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    AuthComponent,
  ],
  providers: [
    { provide: Ability, useValue: new Ability() },
    { provide: PureAbility, useExisting: Ability },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

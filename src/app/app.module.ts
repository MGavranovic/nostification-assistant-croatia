import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchComponent } from './nav-bar/search/search.component';
import { LogoComponent } from './nav-bar/logo/logo.component';
import { MenuComponent } from './nav-bar/menu/menu.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { LandingComponent } from './landing-page/landing/landing.component';
import { MainClassesComponent } from './landing-page/main-classes/main-classes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    LogoComponent,
    MenuComponent,
    LandingPageComponent,
    FooterComponent,
    LandingComponent,
    MainClassesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}

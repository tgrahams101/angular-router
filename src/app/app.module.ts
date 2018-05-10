import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './links/links.component';
import { ResumeComponent } from './resume/resume.component';
import { CareerComponent } from './career/career.component';
import { AboutRoutingModule } from './about/about-routing.module';
import { EarlyLifeComponent } from './early-life/early-life.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LinksComponent,
    ResumeComponent,
    CareerComponent,
    EarlyLifeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

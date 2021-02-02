import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContestantsComponent } from './contestants/contestants.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqComponent } from './faq/faq.component';
import { RegistrationComponent } from './registration/registration.component';
import { TermsComponent } from './terms/terms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HashLocationStrategy,LocationStrategy } from '@angular/common';
import { EligibilitybabypageantComponent } from './eligibilitybabypageant/eligibilitybabypageant.component';
import { EligibiltybeautypageantComponent } from './eligibiltybeautypageant/eligibiltybeautypageant.component';
import { RegisterbabyComponent } from './registerbaby/registerbaby.component';
import { RegisterbeautyComponent } from './registerbeauty/registerbeauty.component';
import { MailerServiceService } from './mailer-service.service';

import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContestantsComponent,
    EligibilityComponent,
    GalleryComponent,
    FaqComponent,
    RegistrationComponent,
    TermsComponent,
    EligibilitybabypageantComponent,
    EligibiltybeautypageantComponent,
    RegisterbabyComponent,
    RegisterbeautyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, MailerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

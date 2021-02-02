import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContestantsComponent } from './contestants/contestants.component';
import { EligibilityComponent } from './eligibility/eligibility.component';
import { EligibilitybabypageantComponent } from './eligibilitybabypageant/eligibilitybabypageant.component';
import { EligibiltybeautypageantComponent } from './eligibiltybeautypageant/eligibiltybeautypageant.component';
import { FaqComponent } from './faq/faq.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { RegisterbabyComponent } from './registerbaby/registerbaby.component';
import { RegisterbeautyComponent } from './registerbeauty/registerbeauty.component';
import { RegistrationComponent } from './registration/registration.component';
import { TermsComponent } from './terms/terms.component';


const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path:'home', component:HomeComponent},
  {path:'about', component:AboutComponent},
  {path:'eligibiltydance', component:EligibilityComponent},
  {path:'eligibiltybaby', component:EligibilitybabypageantComponent},
  {path:'eligibiltybeauty', component:EligibiltybeautypageantComponent},
  {path:'register', component:RegistrationComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contestants', component:ContestantsComponent},
  {path:'Faq', component:FaqComponent},
  {path:'terms', component:TermsComponent},
  {path:'RegisterBaby', component:RegisterbabyComponent},
  {path:'Registerbeauty', component:RegisterbeautyComponent},
  {path:'**', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

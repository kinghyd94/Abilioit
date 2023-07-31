import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BannerPageComponent } from './common/pages/services/banner-page/banner-page.component';
import { ServicesComponent } from './common/pages/services/services.component';
import { AboutUsComponent } from './common/pages/about-us/about-us.component';
import { ContactUsComponent } from './common/pages/contact-us/contact-us.component';
import { ClientsComponent } from './common/pages/clients/clients.component';
import { CareersComponent } from './common/pages/careers/careers.component';
import { BlogComponent } from './common/pages/blog/blog.component';
import { CustomerStoriesComponent } from './common/pages/customer-stories/customer-stories.component';
import { PageNotFoundComponent } from './common/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'services', component:ServicesComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'careers', component:CareersComponent},
  {path:"clients", component:ClientsComponent},
  {path:"blog", component:BlogComponent},
  {path:"customer-stories", component:CustomerStoriesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"**", component:PageNotFoundComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

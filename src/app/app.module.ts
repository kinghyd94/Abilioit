import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
// import '../ngx-owl-carousel-o-fixes';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StickyNavModule } from 'ng2-sticky-nav';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { SuccessStoryComponent } from './common/success-story/success-story.component';
import { SolutionsComponent } from './common/solutions/solutions.component';
import { ProudMomentComponent } from './common/proud-moment/proud-moment.component';
import { CountUpModule } from 'ngx-countup';
import { ClientsFeedbackComponent } from './common/clients-feedback/clients-feedback.component';
import { ExperienceWorkingComponent } from './common/experience-working/experience-working.component';
import { SpecializationComponent } from './common/pages/services/specialization/specialization.component';
import { BannerPageComponent } from './common/pages/services/banner-page/banner-page.component';
import { ServicesComponent } from './common/pages/services/services.component';
import { AboutUsComponent } from './common/pages/about-us/about-us.component';
import { AboutHomeComponent } from './common/pages/about-us/about-home/about-home.component';
import { MissionAndVisionComponent } from './common/pages/about-us/mission-and-vision/mission-and-vision.component';
import { ContactUsComponent } from './common/pages/contact-us/contact-us.component';
import { AssistanceComponent } from './common/pages/contact-us/assistance/assistance.component';

import { NgxSlickJsModule } from 'ngx-slickjs';
import { BlogComponent } from './common/pages/blog/blog.component';
import { ClientsComponent } from './common/pages/clients/clients.component';
import { CareersComponent } from './common/pages/careers/careers.component';
import { CustomerStoriesComponent } from './common/pages/customer-stories/customer-stories.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HttpClientModule } from '@angular/common/http';
import { PositionsComponent } from './common/pages/careers/positions/positions.component';
import { TabsModule } from 'ngx-tabset';
import { NgxPaginationModule } from 'ngx-pagination';
import { PageNotFoundComponent } from './common/pages/page-not-found/page-not-found.component';
import { CursorComponent } from './cursor/cursor.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SuccessStoryComponent,
    SolutionsComponent,
    ProudMomentComponent,
    ClientsFeedbackComponent,
    ExperienceWorkingComponent,
    SpecializationComponent,
    BannerPageComponent,
    ServicesComponent,
    AboutUsComponent,
    AboutHomeComponent,
    MissionAndVisionComponent,
    ContactUsComponent,
    AssistanceComponent,
    BlogComponent,
    ClientsComponent,
    CareersComponent,
    CustomerStoriesComponent,
    PositionsComponent,
    PageNotFoundComponent,
    CursorComponent,

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StickyNavModule,
    CarouselModule,
    BrowserAnimationsModule,
    CountUpModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    HttpClientModule,
    TabsModule.forRoot(),
    NgxPaginationModule,
    SwiperModule,
    NgxSlickJsModule.forRoot({
      links: {
        jquery: "https://code.jquery.com/jquery-3.4.0.min.js",
        slickJs: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
        slickCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css",
        slickThemeCss: "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"
      }
  })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

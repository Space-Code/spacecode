import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { NavbarComponent } from './components/layouts/navbar/navbar.component';
import { SidebarComponent } from './components/layouts/sidebar/sidebar.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { MarketingAgencyComponent } from './components/pages/marketing-agency/marketing-agency.component';
import { DigitalMarketingComponent } from './components/pages/digital-marketing/digital-marketing.component';
import { BusinessSolutionsComponent } from './components/pages/business-solutions/business-solutions.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ProjectDetailsComponent } from './components/pages/project-details/project-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { FeaturesComponent } from './components/pages/features/features.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { PartnerComponent } from './components/pages/partner/partner.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ContactComponent } from './components/pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    MarketingAgencyComponent,
    DigitalMarketingComponent,
    BusinessSolutionsComponent,
    AboutComponent,
    ServicesComponent,
    ServiceDetailsComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    FeaturesComponent,
    TeamComponent,
    PricingComponent,
    PartnerComponent,
    NotFoundComponent,
    FaqComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
